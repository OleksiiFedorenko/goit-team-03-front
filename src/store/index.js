import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import { authReducer } from './auth/authSlice';
import { boardReducer } from './boards/boardSlice';
import { filtersReducer } from './filters/filtersSlice';
import { navReducer } from './nav/navSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  boards: boardReducer,
  filters: filtersReducer,
  nav: navReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'nav'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
