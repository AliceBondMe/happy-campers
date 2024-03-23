import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './advertsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites', 'theme'],
};

const persistedReducer = persistReducer(persistConfig, advertsReducer);

export const store = configureStore({
  reducer: {
    adverts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
