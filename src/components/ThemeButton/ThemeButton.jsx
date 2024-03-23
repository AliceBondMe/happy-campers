import { Button } from './ThemeButton.styled';
import { CiDark, CiLight } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeAction } from '../../redux/advertsSlice';
import { selectTheme } from '../../redux/selectors';

export const ThemeButton = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      aria-label="switch theme"
      onClick={() => dispatch(setThemeAction())}
    >
      {theme === 'dark' ? <CiLight size="28" /> : <CiDark size="28" />}
    </Button>
  );
};
