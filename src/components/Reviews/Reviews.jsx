import { nanoid } from '@reduxjs/toolkit';
import { Icon } from 'components/Icon/Icon';
import { Comment, Header, List } from './Reviews.styled';

export const Reviews = ({ data }) => {
  const { reviews } = data;
  const stars = [1, 1, 1, 1, 1];

  return !reviews.length ? (
    <p>We have no reviews for this camper yet</p>
  ) : (
    <List>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
        <li key={nanoid()}>
          <Header $letter={reviewer_name[0]}>
            <h4>{reviewer_name}</h4>
            {stars.slice(0, reviewer_rating).map(star => (
              <Icon
                key={nanoid()}
                name={'icon-star'}
                width={16}
                height={16}
                fill={'var(--rating)'}
              />
            ))}
            {stars.slice(0, 5 - reviewer_rating).map(star => (
              <Icon
                key={nanoid()}
                name={'icon-star'}
                width={16}
                height={16}
                fill={'var(--bg-categories)'}
              />
            ))}
          </Header>
          <Comment>{comment}</Comment>
        </li>
      ))}
    </List>
  );
};
