import { useLocation } from 'react-router-dom';
import {
  List,
  FilmName,
  Link,
  Item,
  ImageGalleryItemimage,
  ListSection,
} from './FilmList.styled';

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    rating: 8.51,
  },
  {
    title: 'Сон смешного человека',
    author: 'Федор Достоевский',
    rating: 7.75,
  },
];

const second = { propC: 15 };

const trd = { ...books, second };

console.log(trd);

export const FilmList = ({ movies }) => {
  const location = useLocation();
  return (
    <ListSection>
      <List>
        {movies.map(({ poster_path, id, name, title }) => (
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
