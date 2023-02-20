import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/moviesAPI';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function getMovieInfo() {
      const movieCast = await getMovieCredits(id);
      setCast(movieCast);
    }
    getMovieInfo();
  }, [id]);

  if (!cast) {
    return null;
  }

  return (
    <>
        <ul>
          {cast.map(({ character, id, name, profile_path }) => {
            return (
              <li key={id}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                  />
                ) : (
                  '-'
                )}
                <div>
                  <h3>{name}</h3>
                  <h4>Character:</h4>
                  <p>{character}</p>
                </div>
              </li>
            );
          })}
        </ul>
    </>
  );
};

export default Cast;
