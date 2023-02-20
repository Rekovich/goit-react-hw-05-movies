import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesSearch } from 'services/moviesAPI';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('data') ?? '';

  const handleSubmit = data => {
    setMovies([]);
    setQuery(data);
    setSearchParams(data !== '' ? { data } : {});
  };

  useEffect(() => {
    if (!query && !searchValue) {
      return;
    }

    async function loadMovies() {
      try {
        const movies = await getMoviesSearch(searchValue ? searchValue : query);
        if (movies.length === 0) {
          Notify.failure('Please, write something!');
        }
        setMovies(movies);
      } catch (error) {}
    }
    loadMovies();
  }, [query, searchValue]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
