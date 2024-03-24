import { SearchLocation } from 'components/SearchLocation/SearchLocation';
import { MobileWrap, Wrap } from './Sidebar.styled';
import { Filters } from 'components/Filters/Filters';
import { LuFilter } from 'react-icons/lu';
import { useEffect, useState } from 'react';
import { MobileFilters } from 'components/Filters/MobileFilters';
import { FilterButton } from 'components/Filters/Filters.styled';

export const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);
  const [isFilterOpen, setFilterOpen] = useState(false);

  const handleResize = () => {
    window.innerWidth < 1440 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openFilter = () => {
    setFilterOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFilter = () => {
    setFilterOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <Wrap>
      <MobileWrap>
        <SearchLocation />
        {isMobile && (
          <FilterButton
            type="button"
            aria-label="open filter"
            onClick={openFilter}
          >
            <LuFilter />
          </FilterButton>
        )}
      </MobileWrap>
      {isFilterOpen && <MobileFilters closeFilter={closeFilter} />}
      {!isMobile && <Filters />}
    </Wrap>
  );
};
