import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/moviesAPI';
import css from './movie-detail-page.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getMovie() {
      const movie = await getMovieDetails(id);
      setMovie(movie);
    }
    getMovie();
  }, [id]);

  if (!movie) {
    return null;
  }

  const { backdrop_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <>
      <GoBackButton />
      <div className={css.wrap}>
        <img
          className={css.image}
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
        />
        <div>
          <h2>
            {title} {new Date(release_date).getFullYear()}
          </h2>
          <p>User score: {Math.floor(vote_average * 10)}%</p>
          <h3>Overview:</h3>
          <p>{overview}</p>
          <h3>Genres:</h3>
          <p>{genres ? genres.map(genre => genre.name).join(' ') : '-'}</p>
        </div>
      </div>
      <h2>Additional information</h2>
      <ul className={css.list}>
        <li className={css.list_item}>
          <NavLink
            to="cast"
            className={css.link}
            state={{ from: location.state?.from }}
          >
            Cast
          </NavLink>
        </li>
        <li className={css.list_item}>
          <NavLink
            to="reviews"
            className={css.link}
            state={{ from: location.state?.from }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
