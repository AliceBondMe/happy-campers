import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectFavorites } from '../redux/selectors';
import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { DetailesModal } from 'components/DetailsModal/DetailsModal';

const FavoritesPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentAdvert, setCurrentAdvert] = useState(null);
  const favorites = useSelector(selectFavorites);

  const openModal = item => {
    setIsShowModal(true);
    setCurrentAdvert(item);
  };

  const closeModal = () => {
    setIsShowModal(false);
    setCurrentAdvert(null);
  };

  return (
    <>
      {!favorites.length ? (
        <p>It seems you don't have any saved campers yet..</p>
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
