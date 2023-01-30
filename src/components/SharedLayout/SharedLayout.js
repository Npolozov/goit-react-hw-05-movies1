import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.styled';
import { Loadder } from 'helpers/Loadder';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <div
      className="mainContainer"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
        <div style={{ marginLeft: 'auto' }}>
          <Link to="/watchlistmovies">Watchlist</Link>
          <Link to="/watchedlistmovies">Watched</Link>
        </div>
      </Header>
      <Suspense fullback={<Loadder />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
