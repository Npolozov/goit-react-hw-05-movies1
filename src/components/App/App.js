import { Movies } from '../movies/Movies';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../home/Home';
import { Container, Header, Link } from './App.styled';
import { GlobalStyle } from '../GlobalStyle.styled';
import 'react-toastify/dist/ReactToastify.css';
import { MoviesById } from 'components/movies/MoviesById';

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
            <Route path="movies/:id" element={<MoviesById />} />
          </Route>
        </Routes>
      </Container>
      <GlobalStyle />
    </>
  );
};
