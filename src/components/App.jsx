// import Homepage from 'pages/HomePage/HomePage';
// import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Cast from './Cast/Cast';
// import Header from './Header/Header';
// import Reviews from './Reviews/Reviews';

const Header = lazy(() => import('./Header/Header'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
