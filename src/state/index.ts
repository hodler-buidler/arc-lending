import { configureStore } from '@reduxjs/toolkit';

import wallets from './wallets/reducer';

const store = configureStore({
  reducer: {
    wallets,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;