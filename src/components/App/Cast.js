import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../api';
import { Item, ImageGalleryItemimage, ActorName, List } from './Cast.styled';

export const Cast = () => {
  const { id } = useParams();
  const [casts, setCast] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        // setLoading(true);
        const casts = await getCast(id);
        console.log(casts);
        setCast(casts);
      } catch (error) {
      } finally {
        // setLoading(false);
      }
    }

    getMovies();
  }, [id]);

  if (!casts) {
    return;
  }

  return (
    <>
      <List>
        {casts.map(
          ({ name, profile_path }) =>
            profile_path && (
              <Item>
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
