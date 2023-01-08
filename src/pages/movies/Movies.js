// import { Conteiner } from './SearchMoviesstyled';
import { useState, useEffect } from 'react';
import { getMoviesbyQuery } from 'helpers/api';
import { ToastContainer, toast } from 'react-toastify';
import { SearchMovies } from '../searchMoviesList/SearchMovies';
import { FilmList } from 'components/filmList/FilmList';
import { useSearchParams } from 'react-router-dom';
import { Loadder } from 'helpers/Loadder';

const ERROR_MESSAGE = 'Произошла ошыбка';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const updateQueryString = name => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  // const handlelFormSubmit = query => {
  //   setQuery(query);
  //   setError(null);
  //   setMovies([]);
  //   updateQueryString();
  // };

  const onSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function getFilm() {
      try {
        setIsLoading(true);
        const movies = await getMoviesbyQuery(searchQuery);

        // if (movies.length === 0) {
        //   toast.error(
        //     'Sorry, there are no films matching your search query. Please try again.'
        //   );
        //   return;
        // }
        setMovies(movies);
      } catch (error) {
        console.log(error);
        setError(ERROR_MESSAGE);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    }
    getFilm();
  }, [searchQuery]);

  return (
    <>
      <SearchMovies onSubmit={onSubmit} value={searchQuery} />
      {isLoading && <Loadder />}
      {error && <p>{error}</p>}
      {searchQuery && !isLoading && <FilmList movies={movies} />}
      <ToastContainer autoClose={2000} position="top-right" />
    </>
  );
};

export default Movies;
