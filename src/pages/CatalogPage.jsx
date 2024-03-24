import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../redux/operations';
import { selectError, selectFilteredAdverts } from '../redux/selectors';
import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { DetailesModal } from 'components/DetailsModal/DetailsModal';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { ErrorMessage, Wrap } from './Pages.styled';
import { setFiltersAction } from '../redux/advertsSlice';

const CatalogPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentAdvert, setCurrentAdvert] = useState(null);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const filteredAdverts = useSelector(selectFilteredAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());

    return () => {
      dispatch(setFiltersAction(null));
    };
  }, [dispatch]);

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
    <Wrap>
      {error ? (
        <ErrorMessage>
          It seems that something went wrong... Please try again later
        </ErrorMessage>
      ) : (
        <>
          <Sidebar />
          {!filteredAdverts.length ? (
            <ErrorMessage>
              There are no campers that meet your requirements
            </ErrorMessage>
          ) : (
            <AdvertsList adverts={filteredAdverts} openModal={openModal} />
          )}
        </>
      )}
      {isShowModal && (
        <DetailesModal closeModal={closeModal} data={currentAdvert} />
      )}
    </Wrap>
  );
};

export default CatalogPage;
