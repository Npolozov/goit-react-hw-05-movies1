import { getMovies } from 'helpers/api';
import { useEffect, useState } from 'react';
import { FilmList } from 'components/filmList/FilmList';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const movies = await getMovies();
        console.log(movies);
        setMovies(movies);
      } catch (error) {
        toast.error('There is no data');
      }
    }
    getTrendingMovies();
  }, []);
  return (
    <div>
      {movies?.length > 0 && <FilmList movies={movies} />}
      <ToastContainer autoClose={2000} position="top-right" />
    </div>
  );
};

export default Home;
