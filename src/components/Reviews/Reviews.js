import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../helpers/api';
import { Loadder } from '../../helpers/Loadder';
import { List, TitleText, ParagrafText } from './Reviews.styled';

const Reviews = () => {
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
        <List>
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <TitleText>{author}</TitleText>
              <ParagrafText>{content}</ParagrafText>
            </li>
          ))}
        </List>
      )}
      {reviews.length === 0 && <p>There is no information here yet</p>}
    </>
  );
};

export default Reviews;
