import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { createContext, lazy } from 'react';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { selectTheme } from '../redux/selectors';
import { useSelector } from 'react-redux';

const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const ThemeContext = createContext(null);

export const App = () => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle $theme={theme} />
    </ThemeContext.Provider>
  );
};
