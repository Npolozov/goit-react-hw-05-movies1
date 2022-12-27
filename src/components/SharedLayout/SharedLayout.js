import { Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <Outlet />
    </>
  );
};
