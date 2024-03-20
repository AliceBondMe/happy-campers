import { useContext } from 'react';
import { Button } from './ThemeButton.styled';
import { CiDark, CiLight } from 'react-icons/ci';
import { ThemeContext } from 'components/App';

export const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button type="button" aria-label="switch theme" onClick={toggleTheme}>
      {theme === 'dark' ? <CiLight size="28" /> : <CiDark size="28" />}
    </Button>
  );
};
