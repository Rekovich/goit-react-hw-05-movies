import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getMoviesTrending } from 'services/moviesAPI';
import css from './home-page.module.css';




const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        async function loadMoviesTrending() {
            try {
                const movies = await getMoviesTrending();
                setTrendingMovies(movies);
            } catch (error) {

            }
        }
        loadMoviesTrending()
    }, [])


    return (
      <>
        <ul className={css.list}>
          {trendingMovies.map(movie => {
            return (
              <li key={movie.id} className={css.list_item}>
                <NavLink to={`/movies/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <p className={css.item_text}>{movie.title}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
        ;
      </>
    );
}

export default HomePage;
