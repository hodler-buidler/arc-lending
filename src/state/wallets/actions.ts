import { createAction } from '@reduxjs/toolkit';

export const setIsWalletConnecting = createAction<boolean>('wallets/setIsWalletConnecting');
export const setIsAnyWalletSupported = createAction<boolean>('wallets/setIsAnyWalletSupported');
export const setIsSupportedChainEnabled = createAction<boolean>('wallets/setIsSupportedChainEnabled');
export const setIsEthereumProviderConnected = createAction<boolean>('wallets/setIsEthereumProviderConnected');
export const setConnectedAddress = createAction<string>('wallets/setConnectedAddress');
