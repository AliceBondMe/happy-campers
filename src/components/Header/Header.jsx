import Navigation from 'components/Navigation/Navigation';
import { HeaderStyled, MenuButton, NavBlock } from './Header.styled';
import { useEffect, useState } from 'react';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { Link } from 'react-router-dom';
import { ThemeButton } from 'components/ThemeButton/ThemeButton';
import { IoIosClose, IoIosMenu } from 'react-icons/io';
import { Icon } from 'components/Icon/Icon';

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMobileMenulOpen, setIsMobileMenulOpen] = useState(false);

  const handleResize = () => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openMobileMenu = () => {
    setIsMobileMenulOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    setIsMobileMenulOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <HeaderStyled>
      <Link to={'/'}>
        <Icon name="icon-alcove" width={28} height={28} />
        HappyCampers
      </Link>
      <NavBlock>{!isMobile && <Navigation />}</NavBlock>

      {!isMobile && <ThemeButton />}

      {isMobile &&
        (isMobileMenulOpen ? (
          <MenuButton
            type="button"
            aria-label="close menu"
            onClick={closeMobileMenu}
          >
            <IoIosClose />
          </MenuButton>
        ) : (
          <MenuButton
            type="button"
            aria-label="open menu"
            onClick={openMobileMenu}
          >
            <IoIosMenu />
          </MenuButton>
        ))}

      {isMobileMenulOpen && <MobileMenu closeMobileMenu={closeMobileMenu} />}
    </HeaderStyled>
  );
};
