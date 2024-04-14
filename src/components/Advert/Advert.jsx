import { Icon } from 'components/Icon/Icon';
import {
  AdvertCard,
  Description,
  FavButton,
  Header,
  HeaderWrap,
  ImgWrap,
  InfoWrap,
  MainWrap,
  Button,
  PriceWrap,
  Wrap,
} from './Advert.styled';
import { MainFeaturesList } from 'components/MainFeaturesList/MainFeaturesList';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavoritesAction,
  removeFromFavoritesAction,
} from '../../redux/advertsSlice';
import { selectFavorites } from '../../redux/selectors';
import { useEffect, useState } from 'react';

export const Advert = ({ data, openModal }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    favorites.findIndex(({ _id }) => _id === data._id) === -1
      ? setIsFavorite(false)
      : setIsFavorite(true);
  }, [favorites, data]);

  const toggleFavorites = () => {
    isFavorite
      ? dispatch(removeFromFavoritesAction(data))
      : dispatch(addToFavoritesAction(data));
  };

  const { name, price, rating, location, description, gallery, reviews } = data;
  return (
    <AdvertCard>
      <ImgWrap>
        <img src={gallery[0]} alt={name} />
      </ImgWrap>
      <MainWrap>
        <Wrap>
          <HeaderWrap>
            <Header>{name}</Header>
            <PriceWrap>
              <p>€{price.toFixed(2)}</p>
              <FavButton
                type="button"
                aria-label="Add to favorites"
                $isFav={isFavorite}
                onClick={toggleFavorites}
              >
                <Icon name="icon-heart" width={24} height={24} />
              </FavButton>
            </PriceWrap>
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
        </Wrap>
        <Description>{description}</Description>
        <MainFeaturesList data={data} />
        <Button type="button" onClick={() => openModal(data)}>
          Show more
        </Button>
      </MainWrap>
    </AdvertCard>
  );
};
