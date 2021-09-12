import { createAction } from '@reduxjs/toolkit';
import type { BaseProvider, Web3Provider } from '@typings/app';

export const setIsWalletConnecting = createAction<boolean>('wallets/setIsWalletConnecting');
export const setIsAnyWalletSupported = createAction<boolean>('wallets/setIsAnyWalletSupported');
export const setIsSupportedChainEnabled = createAction<boolean>('wallets/setIsSupportedChainEnabled');
export const setIsEthereumProviderConnected = createAction<boolean>('wallets/setIsEthereumProviderConnected');
export const setConnectedAddress = createAction<string>('wallets/setConnectedAddress');
export const setGeneralProvider = createAction<BaseProvider | null>('wallets/setGeneralProvider');
export const setWalletProvider = createAction<Web3Provider | null>('wallets/setWalletProvider');
export const incrementTransactionsCounter = createAction('wallets/incrementTransactionsCounter');
export const setIsPerformingTransaction = createAction<boolean>('wallets/setIsPerformingTransaction');
