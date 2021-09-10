import { createReducer } from '@reduxjs/toolkit'
import {
  requestWalletConnection,
  setIsAnyWalletSupported,
} from './actions';

export interface WalletsState {
  isAnyWalletSupported: boolean;
  isConnectionInProgress: boolean;
};

export const initialState: WalletsState = {
  isAnyWalletSupported: true,
  isConnectionInProgress: false,
};

export default createReducer(initialState, builder => 
  builder
    .addCase(requestWalletConnection, (state) => {
      state.isConnectionInProgress = true;
    })
    .addCase(setIsAnyWalletSupported, (state, { payload }) => {
      state.isAnyWalletSupported = payload;
    })
);
