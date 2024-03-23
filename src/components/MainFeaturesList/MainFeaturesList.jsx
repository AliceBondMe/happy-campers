import { Category } from 'components/Category/Category';
import { CategoriesList } from './MainFeaturesList.styled';

export const MainFeaturesList = ({ data }) => {
  const { adults, engine, transmission, details } = data;

  return (
    <CategoriesList>
      <li>
        <Category iconName="icon-users" text={`${adults} adults`} />
      </li>
      <li style={{ textTransform: 'capitalize' }}>
        <Category iconName="icon-transmission" text={transmission} />
      </li>
      <li style={{ textTransform: 'capitalize' }}>
        <Category iconName="icon-petrol" text={engine} />
      </li>
      {details.kitchen > 0 && (
        <li>
          <Category iconName="icon-kitchen" text="Kitchen" />
        </li>
      )}
      {details.beds > 0 && (
        <li>
          <Category iconName="icon-bed" text={`${data.details.beds} beds`} />
        </li>
      )}
      {details.airConditioner > 0 && (
        <li>
          <Category iconName="icon-ac" text="AC" />
        </li>
      )}
    </CategoriesList>
  );
};
