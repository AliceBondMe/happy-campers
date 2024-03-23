import { nanoid } from '@reduxjs/toolkit';
import { Header, Item } from './VehicleDetails.styled';

export const VehicleDetails = ({ data }) => {
  const detailsArray = [
    'Form',
    'Length',
    'Width',
    'Height',
    'Tank',
    'Consumption',
  ];

  return (
    <>
      <Header>Vehicle details</Header>
      <ul>
        {detailsArray.map(item => (
          <Item key={nanoid()}>
            <span>{item}</span>
            <span>{data[item.toLowerCase()]}</span>
          </Item>
        ))}
      </ul>
    </>
  );
};
