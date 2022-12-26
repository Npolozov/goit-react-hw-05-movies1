// import { Conteiner } from './SearchMoviesstyled';
import { useState, useEffect } from 'react';
import { getMoviesbyQuery } from 'components/api';
import { ToastContainer, toast } from 'react-toastify';
import { SearchMovies } from './SearchMovies';
import { FilmList } from 'components/App/FilmList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const handlelFormSubmit = query => {
    setQuery(query);
    setError(null);
    setMovies([]);
    // setIsLoading(false);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getFilm() {
      try {
        // setIsLoading(true);
        const movies = await getMoviesbyQuery(query);
        console.log(movies);

        if (movies.length === 0) {
          toast.error(
            'Sorry, there are no films matching your search query. Please try again.'
          );
          return;
        }
        setMovies(movies);
      } catch (error) {
        toast.error('Нет данных');
      } finally {
        // setIsLoading(false);
      }
    }
    getFilm();
  }, [query]);

  return (
    <>
      <SearchMovies onSubmit={handlelFormSubmit} />
      {error && <p>{error}</p>}
      {query && <FilmList movies={movies} />}
      <ToastContainer autoClose={2000} position="top-right" />
    </>
  );
};
