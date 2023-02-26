import { getGenres } from 'helpers/api';
import { useEffect, useState } from 'react';
import { FilmList } from 'components/filmList/FilmList';
import { toast } from 'react-toastify';
import { ByGenres } from 'components/ByGenders/ByGenres';
import useGenre from 'config/hooks';
import { CustomPagination } from 'components/Pagination/Pagination';
import { useSelector } from 'react-redux';
import { pages } from 'redux/selectors';

export const Genres = () => {
  const [movies, setMovies] = useState();
  const [total, setTotal] = useState('');
  const [genresMovies, setGenresMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const numberGenres = useGenre(genresMovies);
  // const [genresPage, setGenresPage] = useState(1);
  const page = useSelector(pages);

  console.log(genresMovies);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const { results, total_pages } = await getGenres(page, numberGenres);
        setMovies(results);
        setTotal(Math.round(total_pages / 100));
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong');
      }
    }
    getTrendingMovies();
  }, [page, numberGenres]);

  return (
    <div>
      <ByGenres
        setGenresMovies={setGenresMovies}
        genresMovies={genresMovies}
        genres={genres}
        setGenres={setGenres}
        // setGenresPage={setGenresPage}
      />
      {movies?.length > 0 && <FilmList movies={movies} />}
      {movies?.length > 0 && (
        <CustomPagination total={total} currentPage={page} />
        // <GenresCustomPagination
        //   total={total}
        //   setGenresPage={setGenresPage}
        //   genresPage={genresPage}
        // />
      )}
    </div>
  );
};
