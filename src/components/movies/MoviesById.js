import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMoviesbyId } from '../api';

export const MoviesById = () => {
  const { id } = useParams();
  const [deteils, setDeteils] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        // setLoading(true);
        const moviesDeteils = await getMoviesbyId(id);
        console.log(moviesDeteils);
        setDeteils(moviesDeteils);
      } catch (error) {
      } finally {
        // setLoading(false);
      }
    }

    getMovies();
  }, [id]);

  if (!deteils) {
    return;
  }

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500/${deteils.poster_path}`}
        alt={deteils.name}
      />
      <h2>{deteils.title ? deteils.title : deteils.name}</h2>
      <p>Use Score: {deteils.popularity}</p>
      <p>Overview: {deteils.overview}</p>
      <span>
        Genres:
        {deteils.genres.map(genres => (
          <p>{genres.name}</p>
        ))}
      </span>
      <ul>
        <li>
          <Link to="cast">Read about our mission</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
