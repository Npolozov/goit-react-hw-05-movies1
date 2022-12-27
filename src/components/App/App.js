import { Movies } from '../../pages/movies/Movies';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/home/Home';
import { Container } from './App.styled';
import { GlobalStyle } from '../globalStyle/GlobalStyle.styled';
import 'react-toastify/dist/ReactToastify.css';
import { MoviesById } from 'pages/filmDeteils/MoviesById';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { NotFound } from 'pages/notFound/NotFound';
import { Layout } from 'components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="*" element={<NotFound />} />
            <Route path="movies/:id" element={<MoviesById />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Container>
      <GlobalStyle />
    </>
  );
};
