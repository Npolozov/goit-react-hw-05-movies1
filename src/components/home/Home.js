import { getMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { FilmList } from 'components/App/FilmList';
import { ToastContainer, toast } from 'react-toastify';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const movies = await getMovies();
        console.log(movies);
        setMovies(movies);
      } catch (error) {
        toast.error('Нет данных');
      }
    }
    getTrendingMovies();
  }, []);
  return (
    <div>
      <FilmList movies={movies} />
      <ToastContainer autoClose={2000} position="top-right" />
    </div>
  );
};
