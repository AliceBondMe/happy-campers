import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../redux/operations';
import {
  selectError,
  selectFilteredAdverts,
  selectFilters,
} from '../redux/selectors';
import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { DetailesModal } from 'components/DetailsModal/DetailsModal';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { ErrorMessage, Wrap } from './Pages.styled';
import { setFiltersAction } from '../redux/advertsSlice';
import { useShowModal } from 'hooks/useShowModal';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);
  const filteredAdverts = useSelector(selectFilteredAdverts);
  const { isShowModal, currentAdvert, openModal, closeModal } = useShowModal();

  useEffect(() => {
    dispatch(fetchAdverts());

    return () => {
      dispatch(setFiltersAction(null));
    };
  }, [dispatch]);

  return (
    <Wrap>
      {error ? (
        <ErrorMessage>
          It seems that something went wrong... Please try again later
        </ErrorMessage>
      ) : (
        <>
          <Sidebar />
          {filters && !filteredAdverts.length ? (
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
