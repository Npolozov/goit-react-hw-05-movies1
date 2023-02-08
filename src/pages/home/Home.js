import { getMovies } from 'helpers/api';
import { useEffect, useState } from 'react';
import { FilmList } from 'components/filmList/FilmList';
import { ToastContainer, toast } from 'react-toastify';
import { CustomPagination } from 'components/Pagination/Pagination';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const movies = await getMovies(page);
        console.log(movies);
        setMovies(movies);
      } catch (error) {
        toast.error('There is no data');
      }
    }
    getTrendingMovies();
  }, [page]);
  return (
    <div>
      {movies?.length > 0 && <FilmList movies={movies} />}
      <ToastContainer autoClose={2000} position="top-right" />
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Home;
