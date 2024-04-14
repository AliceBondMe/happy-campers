import { useState } from 'react';

export const useShowModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentAdvert, setCurrentAdvert] = useState(null);

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

  return { isShowModal, currentAdvert, openModal, closeModal };
};
