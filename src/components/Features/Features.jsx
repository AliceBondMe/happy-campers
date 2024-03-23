import { MainFeaturesList } from 'components/MainFeaturesList/MainFeaturesList';
import { CategoriesList } from 'components/MainFeaturesList/MainFeaturesList.styled';
import { Wrap } from './Features.styled';
import { Category } from 'components/Category/Category';
import { VehicleDetails } from 'components/VehicleDetails/VehicleDetails';
import { nanoid } from '@reduxjs/toolkit';

export const Features = ({ data }) => {
  const {
    details: { airConditioner, hob },
  } = data;

  const featuresArray = [
    'CD',
    'Radio',
    'TV',
    'Toilet',
    'Shower',
    'Freezer',
    'Microwave',
    'Gas',
    'Water',
  ];
  return (
    <Wrap>
      <MainFeaturesList data={data} />

      <CategoriesList>
        {airConditioner > 0 && (
          <li>
            <Category
              iconName="icon-conditioner"
              text={`${airConditioner} air conditioner`}
            />
          </li>
        )}

        {hob > 0 && (
          <li>
            <Category iconName="icon-hob" text={`${hob} hob`} />
          </li>
        )}

        {featuresArray.map(
          item =>
            (data.details[item.toLowerCase()] > 0 ||
              data.details[item] > 0) && (
              <li key={nanoid()}>
                <Category iconName={`icon-${item.toLowerCase()}`} text={item} />
              </li>
            )
        )}
      </CategoriesList>

      <VehicleDetails data={data} />
    </Wrap>
  );
};
