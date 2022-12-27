import { Loadder } from 'helpers/Loadder';
import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMoviesbyId } from '../../helpers/api';
import { Link, NavigationLink, filmList, Paragraf } from './MoviesById.styled';

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
          <filmsDeteils>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${deteils.poster_path}`}
                alt={deteils.name}
              />
            </div>
            <div>
              <h2>
                {deteils.title ? deteils.title : deteils.name}(
                {new Date(deteils.release_date).getFullYear()})
              </h2>
              <Paragraf>Use Score: {deteils.vote_average.toFixed(1)}</Paragraf>
              <p>Overview: {deteils.overview}</p>
              <span>
                Genres:
                {deteils.genres.map(genres => (
                  <p>{genres.name}</p>
                ))}
              </span>
            </div>
          </filmsDeteils>

          <div>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <p></p>
          <Outlet />
        </>
      )}
    </>
  );
};
