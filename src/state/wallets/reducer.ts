import { createReducer } from '@reduxjs/toolkit'
import type { BaseProvider } from '@typings/app';
import {
  setIsWalletConnecting,
  setIsAnyWalletSupported,
  setIsSupportedChainEnabled,
  setConnectedAddress,
  setGeneralProvider,
  setWalletProvider,
} from './actions';

export interface WalletsState {
  isAnyWalletSupported: boolean;
  connectedAddress: string;
  isEthereumProviderConnected: boolean;
  isWalletConnecting: boolean;
  isSupportedChainEnabled: boolean;
  generalProvider: BaseProvider | null;
  walletProvider: BaseProvider | null;
};

export const initialState: WalletsState = {
  isAnyWalletSupported: true,
  isEthereumProviderConnected: false,
  connectedAddress: '',
  isWalletConnecting: true,
  isSupportedChainEnabled: true,
  generalProvider: null,
  walletProvider: null,
};

export default createReducer(initialState, builder => 
  builder
    .addCase(setIsWalletConnecting, (state, { payload }) => {
      state.isWalletConnecting = payload;
    })
    .addCase(setIsAnyWalletSupported, (state, { payload }) => {
      state.isAnyWalletSupported = payload;
    })
    .addCase(setIsSupportedChainEnabled, (state, { payload }) => {
      state.isSupportedChainEnabled = payload;
    })
    .addCase(setConnectedAddress, (state, { payload }) => {
      state.connectedAddress = payload;
    })
    .addCase(setGeneralProvider, (state, { payload }) => {
      state.generalProvider = payload;
    })
    .addCase(setWalletProvider, (state, { payload }) => {
      state.walletProvider = payload;
    })
);
