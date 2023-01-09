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
} from './MoviesById.styled';

const ERROR_MESSAGE = 'Произошла ошыбка';

export const MoviesById = () => {
  const { id } = useParams();
  const [deteils, setDeteils] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

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
          <FilmsDeteils>
            <ImageFilms
              src={`https://image.tmdb.org/t/p/w500/${deteils.poster_path}`}
              alt={deteils.name}
            />
            <div>
              <TitleText>
                {deteils.title ? deteils.title : deteils.name}(
                {new Date(deteils.release_date).getFullYear()})
              </TitleText>
              <ParagrafText>
                Use Score:
                <SpanText>{deteils.vote_average.toFixed(1)}</SpanText>
              </ParagrafText>
              <ParagrafText>
                Overview:<SpanText>{deteils.overview}</SpanText>
              </ParagrafText>
              <ParagrafText>
                Genres:
                {deteils.genres.map(genres => (
                  <SpanText>{genres.name}</SpanText>
                ))}
              </ParagrafText>
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
