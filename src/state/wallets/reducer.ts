import { createReducer } from '@reduxjs/toolkit'
import type { BaseProvider, Web3Provider } from '@typings/app';
import {
  setIsWalletConnecting,
  setIsAnyWalletSupported,
  setIsSupportedChainEnabled,
  setConnectedAddress,
  setGeneralProvider,
  setWalletProvider,
  incrementTransactionsCounter,
  setIsPerformingTransaction,
} from './actions';

export interface WalletsState {
  isAnyWalletSupported: boolean;
  connectedAddress: string;
  isEthereumProviderConnected: boolean;
  isWalletConnecting: boolean;
  isSupportedChainEnabled: boolean;
  generalProvider: BaseProvider | null;
  walletProvider: Web3Provider | null;
  transactionsCounter: number;
  isPerformingTransaction: boolean;
};

export const initialState: WalletsState = {
  isAnyWalletSupported: true,
  isEthereumProviderConnected: false,
  connectedAddress: '',
  isWalletConnecting: true,
  isSupportedChainEnabled: true,
  generalProvider: null,
  walletProvider: null,
  transactionsCounter: 0,
  isPerformingTransaction: false,
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
    .addCase(incrementTransactionsCounter, (state) => {
      state.transactionsCounter = state.transactionsCounter + 1;
    })
    .addCase(setIsPerformingTransaction, (state, { payload }) => {
      state.isPerformingTransaction = payload;
    })
);
