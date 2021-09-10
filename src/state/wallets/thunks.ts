import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIsWalletConnecting } from './actions';

export const connectAccount = createAsyncThunk(
  'wallets/connectAccount',
  async (payload, { dispatch }) => {
    const ethereum = window?.ethereum;

    try {
      dispatch(setIsWalletConnecting(true));
      await ethereum?.request({ method: 'eth_requestAccounts' });
    } catch (err) {}
    finally {
      dispatch(setIsWalletConnecting(false));
    }
  },
);