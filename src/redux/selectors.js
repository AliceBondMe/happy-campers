import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.items;
export const selectFavorites = state => state.adverts.favorites;
export const selectError = state => state.adverts.error;
export const selectTheme = state => state.adverts.theme;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectLocation = state => state.adverts.location;
export const selectFilters = state => state.adverts.filters;

export const selectLocatedAdverts = createSelector(
  [selectAdverts, selectLocation],
  (adverts, location) => {
    return location === ''
      ? adverts
      : adverts.filter(advert =>
          advert.location.toLowerCase().includes(location.toLowerCase().trim())
        );
  }
);

export const selectFilteredAdverts = createSelector(
  [selectLocatedAdverts, selectFilters],
  (locatedAdverts, filters) => {
    return !filters
      ? locatedAdverts
      : locatedAdverts.filter(advert => {
          const airConditionerFilter =
            !filters?.equipment?.includes('airConditioner') ||
            advert.details.airConditioner > 0;
          const transmissionFilter =
            !filters?.equipment?.includes('transmission') ||
            advert.transmission === 'automatic';
          const kitchenFilter =
            !filters?.equipment?.includes('kitchen') ||
            advert.details.kitchen > 0;
          const tvFilter =
            !filters?.equipment?.includes('TV') || advert.details.TV > 0;
          const ShowerFilter =
            !filters?.equipment?.includes('shower') ||
            (advert.details.shower > 0 && advert.details.toilet > 0);
          const formFilter = !filters?.form || advert.form === filters?.form;

          return (
            airConditionerFilter &&
            transmissionFilter &&
            kitchenFilter &&
            tvFilter &&
            ShowerFilter &&
            formFilter
          );
        });
  }
);
