import { SearchLocation } from 'components/SearchLocation/SearchLocation';
import { Wrap } from './Sidebar.styled';
import { Filters } from 'components/Filters/Filters';

export const Sidebar = () => {
  return (
    <Wrap>
      <SearchLocation />
      <Filters />
    </Wrap>
  );
};
