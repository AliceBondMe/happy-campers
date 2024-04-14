import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { DetailesModal } from 'components/DetailsModal/DetailsModal';
import { ErrorMessage } from './Pages.styled';
import { useShowModal } from 'hooks/useShowModal';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const { isShowModal, currentAdvert, openModal, closeModal } = useShowModal();

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
