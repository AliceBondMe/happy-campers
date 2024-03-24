import { Backdrop } from 'components/DetailsModal/DetailsModal.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FilterButton, ModalFilter } from './Filters.styled';
import { Filters } from './Filters';
import { LuFilterX } from 'react-icons/lu';

const modalRoot = document.querySelector('#modal-root');

export const MobileFilters = ({ closeFilter }) => {
  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      closeFilter();
    }
  };

  useEffect(() => {
    const handleCloseByEsc = e => {
      if (e.code === 'Escape') {
        closeFilter();
      }
    };
    window.addEventListener('keydown', handleCloseByEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseByEsc);
    };
  }, [closeFilter]);

  return createPortal(
    <Backdrop onClick={handleBackdropClose}>
      <ModalFilter>
        <FilterButton
          type="button"
          aria-label="close filter"
          onClick={closeFilter}
        >
          <LuFilterX />
        </FilterButton>
        <Filters />
      </ModalFilter>
    </Backdrop>,
    modalRoot
  );
};
