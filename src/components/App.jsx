import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { createContext, lazy, useState } from 'react';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const CataloguePage = lazy(() => import('../pages/CataloguePage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const ThemeContext = createContext(null);

export const App = () => {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle $theme={theme} />
    </ThemeContext.Provider>
  );
};
