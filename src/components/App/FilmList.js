import {
  List,
  FilmName,
  Link,
  Item,
  ImageGalleryItemimage,
  ListSection,
} from './FilmList.styled';

export const FilmList = ({ movies }) => {
  return (
    <ListSection>
      <List>
        {movies.map(({ poster_path, id, name, original_title }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`}>
              <ImageGalleryItemimage
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={name}
              />
              {(name = true > 0 && <FilmName>{name}</FilmName>)}
              {
                (original_title = true > 0 && (
                  <FilmName>{original_title}</FilmName>
                ))
              }
            </Link>
          </Item>
        ))}
      </List>
    </ListSection>
  );
};
