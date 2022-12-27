import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link, Footer } from './SharedLayout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <Suspense fullback={null}>
        <Outlet />
      </Suspense>
      <Footer>
        <div>Footer</div>
      </Footer>
    </>
  );
};
