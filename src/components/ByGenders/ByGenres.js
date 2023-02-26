import { byGenres } from 'helpers/api';
import { useEffect } from 'react';
import { Chip } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changePages } from 'redux/createSlicePaga';

export const ByGenres = ({
  setGenresMovies,
  genresMovies,
  genres,
  setGenres,
  setGenresPage,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {});

  useEffect(() => {
    async function getGenresMovies() {
      try {
        const genresList = await byGenres();
        setGenres(genresList);
      } catch (error) {
        console.log(error);
      }
    }
    getGenresMovies();
  }, [setGenres]);

  const handleAdd = genre => {
    setGenresMovies([...genresMovies, genre]);
    setGenres(genres.filter(g => g.id !== genre.id));
    // setGenresPage(1);
    dispatch(changePages(1));
  };

  const handleRemove = genre => {
    setGenresMovies(genresMovies.filter(selected => selected.id !== genre.id));
    setGenres([...genres, genre]);
    // setGenresPage(1);
    dispatch(changePages(1));
  };

  return (
    <div style={{ padding: '6px 0' }}>
      {genresMovies.map(genre => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map(genre => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};
