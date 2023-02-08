// import { Movies } from '../../pages/movies/Movies';
import { Routes, Route } from 'react-router-dom';
// import { Home } from '../../pages/home/Home';
import { Container } from './App.styled';
import { GlobalStyle } from '../globalStyle/GlobalStyle.styled';
import 'react-toastify/dist/ReactToastify.css';
import { MoviesById } from 'pages/filmDeteils/MoviesById';
// import { Cast } from '../Cast/Cast';
// import { Reviews } from '../Reviews/Reviews';
// import { NotFound } from 'pages/notFound/NotFound';
import { Layout } from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';
import { Video } from 'components/Video/Video';
import { WatchlistMovies } from 'pages/watchlistMovies/watchlistMovies';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const Movies = lazy(() => import('pages/movies/Movies'));
  const Home = lazy(() => import('pages/home/Home'));
  const NotFound = lazy(() => import('pages/notFound/NotFound'));
  const Cast = lazy(() => import('../Cast/Cast'));
  const Reviews = lazy(() => import('../Reviews/Reviews'));
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/watchlist" element={<WatchlistMovies />} />
            <Route path="*" element={<NotFound />} />
            <Route path="movies/:id" element={<MoviesById />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="video" element={<Video />} />
            </Route>
          </Route>
        </Routes>
      </Container>
      <ToastContainer autoClose={2000} position="top-right" />
      <GlobalStyle />
    </>
  );
};
