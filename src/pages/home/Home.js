import { getMovies } from 'helpers/api';
import { useEffect, useState } from 'react';
import { FilmList } from 'components/filmList/FilmList';
import { ToastContainer, toast } from 'react-toastify';
import { CustomPagination } from 'components/Pagination/Pagination';
import { pages } from 'redux/selectors';
import { useSelector } from 'react-redux';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const page = useSelector(pages);
  console.log(page);
  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const movies = await getMovies(page);
        console.log(movies);
        setMovies(movies);
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong');
      }
    }
    getTrendingMovies();
  }, [page]);
  return (
    <div>
      {movies?.length > 0 && <FilmList movies={movies} />}
      <ToastContainer autoClose={2000} position="top-right" />
      <CustomPagination currentPage={page} />
    </div>
  );
};

export default Home;
