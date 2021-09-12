import { configureStore } from '@reduxjs/toolkit';

import app from './app/reducer';
import wallets from './wallets/reducer';
import lending from './lending/reducer';

const store = configureStore({
  reducer: {
    app,
    wallets,
    lending,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true,
    serializableCheck: false,
  }),
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;