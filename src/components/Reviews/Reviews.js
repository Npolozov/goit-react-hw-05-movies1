import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../helpers/api';
import { Loadder } from '../../helpers/Loadder';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const casts = await getReviews(id);
        console.log(casts);
        setReviews(casts);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [id]);

  if (!reviews) {
    return;
  }
  return (
    <>
      {isLoading && <Loadder />}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews.length === 0 && <p>There is no information here yet</p>}
    </>
  );
};
