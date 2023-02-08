import { Loadder } from 'helpers/Loadder';
import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMoviesbyId } from '../../helpers/api';
import {
  Link,
  NavigationLink,
  FilmsDeteils,
  LinkList,
  AdditionalSection,
  ParagrafText,
  SpanText,
  TitleText,
  ImageFilms,
  Button,
} from './MoviesById.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addMoviesToWatchList } from 'redux/createSlice';
import { watchList } from 'redux/selectors';
// import { useLocalStorage } from 'helpers/hooks';
import { toast } from 'react-toastify';
import { unavailable } from 'config/config';

const ERROR_MESSAGE = 'Произошла ошыбка';
// const initialStickers = [];

export const MoviesById = () => {
  const { id } = useParams();
  const [deteils, setDeteils] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [moviesList, setMoviesList] = useLocalStorage(
  //   'contact',
  //   initialStickers
  // );
  const location = useLocation();
  const dispatch = useDispatch();
  const watchListMovies = useSelector(watchList);

  console.log(watchListMovies);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const moviesDeteils = await getMoviesbyId(id);
        console.log(moviesDeteils);
        setDeteils(moviesDeteils);
      } catch (error) {
        console.log(error.message);
        setError(ERROR_MESSAGE);
        setDeteils(null);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [id]);

  if (!deteils) {
    return;
  }

  const genresFilms = () => {
    if (deteils.genres.length > 3 || deteils.genres.length === 0) {
      const movieGenres = deteils.genres.slice(0, 2);
      const newObject = { id: nanoid(), name: 'Other' };
      movieGenres.push(newObject);
      return movieGenres.map(genres => genres.name).join(', ');
    }
    return deteils.genres.map(genres => genres.name).join(', ');
  };

  const genre = genresFilms();

  console.log(deteils.genres);
  console.log(genre);

  let storedMovies = watchListMovies.find(item => item.id === deteils.id);

  const watchListDisabled = storedMovies ? true : false;

  // const addMovies = () => {
  //   if (!moviesList) {
  //     return;
  //   }
  //   setMoviesList([...moviesList, deteils]);
  //   console.log(moviesList);
  // };

  const addMovies = deteils => {
    try {
      dispatch(addMoviesToWatchList(deteils));
      toast.success('You are successfully add movies');
    } catch (error) {
      toast.error('Try reloading the page');
    }
  };

  const { poster_path, name, title, overview, release_date, vote_average } =
    deteils;

  return (
    <>
      {loading && <Loadder />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {deteils && (
        <>
          <div>
            <NavigationLink to={location.state?.from ?? '/movies'}>
              Go Back
            </NavigationLink>
          </div>
          <FilmsDeteils key={deteils.id}>
            <ImageFilms
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : unavailable
              }
              alt={name}
            />
            <div>
              <TitleText>
                {title ? title : name}({new Date(release_date).getFullYear()})
              </TitleText>
              <ParagrafText>
                Use Score:
                <SpanText>{vote_average.toFixed(1)}</SpanText>
              </ParagrafText>
              <ParagrafText>
                Overview:<SpanText>{overview}</SpanText>
              </ParagrafText>
              <ParagrafText>
                Genres:<SpanText>{genre}</SpanText>{' '}
              </ParagrafText>
              <div
                style={{
                  marginTop: 50,
                  display: 'flex',
                  gap: 10,
                }}
              >
                <Button
                  disabled={watchListDisabled}
                  onClick={() => addMovies(deteils)}
                >
                  AddMoviesList
                </Button>
              </div>
            </div>
          </FilmsDeteils>
          <AdditionalSection>
            <TitleText>Additional information</TitleText>
            <LinkList>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
              <li>
                <Link to="video">Trailer</Link>
              </li>
            </LinkList>
          </AdditionalSection>
          <Suspense>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};
