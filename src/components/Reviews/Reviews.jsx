import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getMovieInfo() {
      const reviews = await getMovieReviews(id);
      setReviews(reviews);
    }
    getMovieInfo();
  }, [id]);
  if (!reviews) {
    return null;
  }
  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, we don't have any reviews</p>
      )}
    </>
  );
};

export default Reviews;
