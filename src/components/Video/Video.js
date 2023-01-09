import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { getVideo } from 'helpers/api';
import { Container } from './Video.styled';

export const Video = () => {
  const { id } = useParams();
  const [video, setVideo] = useState('');
  console.log(video);
  //   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        // setIsLoading(true);
        const video = await getVideo(id);
        console.log(video);
        setVideo(video);
      } catch (error) {
      } finally {
        // setIsLoading(false);
      }
    }

    getMovies();
  }, [id]);

  if (!video) {
    return;
  }

  const trailer = video.find(vid => vid.name === 'Official Trailer');
  console.log(trailer);
  const opts = {
    height: '500px',
    width: '100%',
  };

  return (
    <Container>
      <YouTube videoId={trailer.key} opts={opts} />
    </Container>
  );
};
