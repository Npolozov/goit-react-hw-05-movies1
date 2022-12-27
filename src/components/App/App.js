import { Movies } from '../../pages/movies/Movies';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/home/Home';
import { Container, Header, Link } from './App.styled';
import { GlobalStyle } from '../globalStyle/GlobalStyle.styled';
import 'react-toastify/dist/ReactToastify.css';
import { MoviesById } from 'pages/movies/MoviesById';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { NotFound } from 'pages/notFound/NotFound';

export const App = () => {
  return (
    <>
      <Container>
        <Header>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Header>
        <Routes>
          <Route path="/">
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
