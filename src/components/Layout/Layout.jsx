import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main, Wrap } from './Layout.styled';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </Wrap>
  );
};

export default Layout;
