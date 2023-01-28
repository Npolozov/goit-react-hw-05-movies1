import { useLocalStorage } from 'helpers/hooks';
import { useLocation } from 'react-router-dom';
import {
  List,
  FilmName,
  Link,
  Item,
  ImageGalleryItemimage,
  ListSection,
} from './wachlistMovies.styled';

const initialStickers = [];

export const WachlistMovies = () => {
  const [moviesList, setMoviesList] = useLocalStorage(
    'contact',
    initialStickers
  );
  console.log(moviesList);
  const location = useLocation();

  return (
    <ListSection>
      <List>
        {moviesList.map(({ poster_path, id, name, title }) => (
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
          </Item>
        ))}
      </List>
    </ListSection>
  );
};
