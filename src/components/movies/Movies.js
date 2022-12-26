// import { Conteiner } from './SearchMoviesstyled';
import { useState, useEffect } from 'react';
import { getMoviesbyQuery } from 'components/api';
import { ToastContainer, toast } from 'react-toastify';
import { SearchMovies } from './SearchMovies';
import { FilmList } from 'components/App/FilmList';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const productName = searchParams.get('name') ?? '';
  // const [isLoading, setIsLoading] = useState(false);

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
        // setIsLoading(true);
        const movies = await getMoviesbyQuery(searchQuery);
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
  }, [searchQuery]);

  return (
    <>
      <SearchMovies onSubmit={onSubmit} value={searchQuery} />
      {/* {error && <p>{error}</p>} */}
      {searchQuery && <FilmList movies={movies} />}
      <ToastContainer autoClose={2000} position="top-right" />
    </>
  );
};
