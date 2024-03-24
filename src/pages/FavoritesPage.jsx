import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectFavorites } from '../redux/selectors';
import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { DetailesModal } from 'components/DetailsModal/DetailsModal';
import { ErrorMessage } from './Pages.styled';

const FavoritesPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentAdvert, setCurrentAdvert] = useState(null);
  const favorites = useSelector(selectFavorites);

  const openModal = item => {
    setIsShowModal(true);
    setCurrentAdvert(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsShowModal(false);
    setCurrentAdvert(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      {!favorites.length ? (
        <ErrorMessage>
          It seems you don't have any saved campers yet..
        </ErrorMessage>
      ) : (
        <>
          <AdvertsList adverts={favorites} openModal={openModal} />
          {isShowModal && (
            <DetailesModal closeModal={closeModal} data={currentAdvert} />
          )}
        </>
      )}
    </>
  );
};

export default FavoritesPage;
