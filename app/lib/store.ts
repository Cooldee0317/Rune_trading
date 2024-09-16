import { combineReducers, configureStore } from '@reduxjs/toolkit';
import walletReducer from './features/walletSlice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer } from 'redux-persist';

// Configuration for persistence
const persistConfig = {
  key: 'ordinals-fun',
  storage,
  whiteList: ['wallet'],
};

const rootReducer = combineReducers({
  wallet: walletReducer,
});

// Create a persisted reducer
const persistedWalletReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedWalletReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
