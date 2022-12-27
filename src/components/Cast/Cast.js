import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../helpers/api';
import { Item, ImageGalleryItemimage, ActorName, List } from './Cast.styled';
import { Loadder } from '../../helpers/Loadder';

export const Cast = () => {
  const { id } = useParams();
  const [casts, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const casts = await getCast(id);
        console.log(casts);
        setCast(casts);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [id]);

  if (!casts) {
    return;
  }

  return (
    <>
      {isLoading && <Loadder />}
      <List>
        {casts.map(
          ({ name, profile_path }) =>
            profile_path && (
              <Item key={name}>
                <ImageGalleryItemimage
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                />
                <ActorName>{name}</ActorName>
              </Item>
            )
        )}
      </List>
    </>
  );
};
