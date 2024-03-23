import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';
import { handlePending, handleRejected } from './helpers';

const advertsInitialState = {
  items: [],
  favorites: [],
  isLoading: false,
  error: null,
  theme: 'light',
  location: '',
  filters: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  reducers: {
    setLocationAction(state, action) {
      state.location = action.payload;
    },
    setFiltersAction(state, action) {
      state.filters = action.payload;
    },
    setThemeAction(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    addToFavoritesAction(state, action) {
      state.favorites.unshift(action.payload);
    },
    removeFromFavoritesAction(state, action) {
      state.favorites = state.favorites.filter(
        ({ _id }) => _id !== action.payload._id
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addMatcher(action => {
        return action.type.endsWith('pending');
      }, handlePending)
      .addMatcher(action => {
        return action.type.endsWith('rejected');
      }, handleRejected);
  },
});

export const {
  addToFavoritesAction,
  removeFromFavoritesAction,
  setThemeAction,
  setLocationAction,
  setFiltersAction,
} = advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;
