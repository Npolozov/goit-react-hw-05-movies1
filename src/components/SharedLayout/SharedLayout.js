import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.styled';
import { Loadder } from 'helpers/Loadder';

export const Layout = () => {
  return (
    <>
      <Header>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
        <div style={{ marginLeft: 'auto' }}>
          <Link to="/wachlistmovies">Watchlist</Link>
          <Link to="/wachedlistmovies">Watched</Link>
        </div>
      </Header>
      <Suspense fullback={<Loadder />}>
        <Outlet />
      </Suspense>
    </>
  );
};
