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
      </Header>
      <Suspense fullback={<Loadder />}>
        <Outlet />
      </Suspense>
      {/* <Footer>
        <div>Footer</div>
      </Footer> */}
    </>
  );
};
