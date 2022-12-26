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
        {movies.map(({ poster_path, id, name, title }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`}>
              <ImageGalleryItemimage
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={name}
              />
              <FilmName>{title ? title : name}</FilmName>
              {/* {(name = true > 0 && <FilmName>{name}</FilmName>)}
              {(title = true > 0 && <FilmName>{title}</FilmName>)} */}
            </Link>
          </Item>
        ))}
      </List>
    </ListSection>
  );
};
