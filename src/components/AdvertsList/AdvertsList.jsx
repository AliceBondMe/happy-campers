import { Advert } from 'components/Advert/Advert';
import { List, LoadMoreButton, Wrap } from './AdvertsList.styled';
import { useEffect, useState } from 'react';

export const AdvertsList = ({ adverts, openModal }) => {
  const [advertsToShow, setAdvertsToShow] = useState(adverts.slice(0, 4));
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    setAdvertsToShow(adverts.slice(0, page * 4));
    page < Math.ceil(adverts.length / 4)
      ? setShowLoadMore(true)
      : setShowLoadMore(false);
  }, [page, adverts]);

  const loadMoreAdverts = () => {
    setPage(prev => prev + 1);
  };

  return (
    <Wrap>
      <List>
        {advertsToShow.map(advert => (
          <li key={advert._id}>
            <Advert data={advert} openModal={openModal} />
          </li>
        ))}
      </List>

      {showLoadMore && (
        <LoadMoreButton onClick={loadMoreAdverts}>Load more</LoadMoreButton>
      )}
    </Wrap>
  );
};
