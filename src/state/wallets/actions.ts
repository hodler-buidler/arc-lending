import { createAction } from '@reduxjs/toolkit';

export const requestWalletConnection = createAction('wallet/requestWalletConnection');
export const setIsAnyWalletSupported = createAction<boolean>('wallet/setIsAnyWalletSupported');
