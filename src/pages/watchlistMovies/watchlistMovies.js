import { useDispatch, useSelector } from 'react-redux';
import { watchList } from 'redux/selectors';
import { useLocation } from 'react-router-dom';
import {
  List,
  FilmName,
  Link,
  Item,
  ImageGalleryItemimage,
  ListSection,
  Button,
} from './watchlistMovies.styled';
import { deleteMovies } from 'redux/createSlice';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export const WatchlistMovies = () => {
  const watchListMovies = useSelector(watchList);
  const location = useLocation();
  const dispatch = useDispatch();

  const movies = watchListMovies.length;

  return movies > 0 ? (
    <ListSection>
      <List>
        {watchListMovies.map(({ poster_path, id, name, title }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <ImageGalleryItemimage
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                }
                alt={name}
              />
              <FilmName>{title ? title : name}</FilmName>
            </Link>
            <Button onClick={() => dispatch(deleteMovies(id))}>
              <IoIosCloseCircleOutline
                style={{ width: 30, height: 30, color: 'orange' }}
              />
            </Button>
          </Item>
        ))}
      </List>
    </ListSection>
  ) : (
    <h2>Your list is empty</h2>
  );
};
