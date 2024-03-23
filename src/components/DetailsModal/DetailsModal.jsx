import { createPortal } from 'react-dom';
import {
  Backdrop,
  CloseBtn,
  Description,
  Gallery,
  Header,
  HeaderWrap,
  ImageWrap,
  ModalContainer,
  Price,
} from './DetailsModal.styled';
import { useEffect } from 'react';
import { Icon } from 'components/Icon/Icon';
import { InfoWrap } from 'components/Advert/Advert.styled';
import { nanoid } from '@reduxjs/toolkit';
import { DetailesInteractive } from 'components/DetailsInteractive/DetailsInteractive';

const modalRoot = document.querySelector('#modal-root');

export const DetailesModal = ({ data, closeModal }) => {
  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleCloseByEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleCloseByEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseByEsc);
    };
  }, [closeModal]);

  const { name, price, rating, location, description, gallery, reviews } = data;

  return createPortal(
    <Backdrop onClick={handleBackdropClose}>
      <ModalContainer>
        <HeaderWrap>
          <Header>{name}</Header>
          <CloseBtn
            type="button"
            aria-label="Close Details modal window"
            onClick={closeModal}
          >
            <Icon name="icon-close" width={32} height={32} />
          </CloseBtn>
        </HeaderWrap>
        <InfoWrap>
          <p>
            <Icon name="icon-star" width={16} height={16} />
            <span>
              {rating}({reviews.length} Reviews)
            </span>
          </p>
          <p>
            <Icon name="icon-location" width={16} height={16} />
            {location}
          </p>
        </InfoWrap>
        <Price>€{price}.00</Price>
        <Gallery>
          {gallery.slice(0, 3).map((item, idx) => (
            <ImageWrap key={nanoid()}>
              <img alt={`${name} ${idx + 1}`} src={item} />
            </ImageWrap>
          ))}
        </Gallery>
        <Description>{description}</Description>
        <DetailesInteractive data={data} />
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};
