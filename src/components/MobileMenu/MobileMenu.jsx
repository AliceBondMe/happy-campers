import { ThemeButton } from 'components/ThemeButton/ThemeButton';
import { MenuContainer } from './MobileMenu.styled';
import Navigation from 'components/Navigation/Navigation';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const MobileMenu = ({ closeMobileMenu }) => {
  return createPortal(
    <MenuContainer>
      <Navigation closeMobileMenu={closeMobileMenu} />
      <ThemeButton />
    </MenuContainer>,
    modalRoot
  );
};
