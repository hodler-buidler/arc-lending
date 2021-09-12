import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchMaxLTVRatio,
  fetchCollateralPriceUSD,
  fetchVaults,
  depositToVault,
} from '@api/smart-contracts/vaults'
import { METAMASK_REJECTED_TRANSACTION_CODE } from '@config/wallets';
import { showMessage } from '@state/app/actions';
import { 
  incrementTransactionsCounter,
  setIsPerformingTransaction,
} from '@state/wallets/actions';
import {
  setIsMaxLTVRatioLoading,
  setIsCollateralPriceLoading,
  setMaxLTVRatio,
  setCollateralPriceUSD,
  setAreVaultsLoading,
  setAllVaults,
  addVault,
} from './actions';

export const loadMaxLTVRatio = createAsyncThunk(
  'lending/loadMaxLTVRatio',
  async (payload, { dispatch, getState }) => {
    try {
      dispatch(setIsMaxLTVRatioLoading(true));
      const { wallets } = getState() as any;

      if (!wallets.generalProvider) throw new Error();
      const LTVRatio = await fetchMaxLTVRatio(wallets.generalProvider);

      dispatch(setMaxLTVRatio(LTVRatio));
    } catch (err) {
      dispatch(showMessage({
        type: 'error',
        content: `Couldn't fetch max LTV ratio, please try reload the page.`,
      }));
    } finally {
      dispatch(setIsMaxLTVRatioLoading(false));
    }
  },
);

export const loadCollateralPrice = createAsyncThunk(
  'lending/loadCollateralPrice',
  async (payload, { dispatch, getState }) => {
    try {
      dispatch(setIsCollateralPriceLoading(true));
      const { wallets } = getState() as any;

      if (!wallets.generalProvider) throw new Error();
      const collateralPriceUSD = await fetchCollateralPriceUSD(wallets.generalProvider);

      dispatch(setCollateralPriceUSD(collateralPriceUSD));
    } catch (err) {
      dispatch(showMessage({
        type: 'error',
        content: `Couldn't fetch collateral price, please try reload the page.`,
      }));
    } finally {
      dispatch(setIsCollateralPriceLoading(false));
    }
  },
);

export const loadVaults = createAsyncThunk(
  'lending/loadVaults',
  async (payload, { dispatch, getState }) => {
    try {
      dispatch(setAreVaultsLoading(true));
      const { wallets } = getState() as any;

      if (!wallets.walletProvider) throw new Error();
      const vaults = await fetchVaults(wallets.walletProvider);

      dispatch(setAllVaults(vaults));
    } catch (err) {
      dispatch(showMessage({
        type: 'error',
        content: `Couldn't fetch vaults. Please reload the page.`,
      }));
    } finally {
      dispatch(setAreVaultsLoading(false));
    }
  },
);

type BorrowTransactionParams = {
  collateralAmount: number;
  debtAmount: number;
}
export const borrow = createAsyncThunk(
  'lending/borrow',
  async (payload: BorrowTransactionParams, { dispatch, getState }) => {
    try {
      dispatch(setIsPerformingTransaction(true));

      const { wallets } = getState() as any;

      if (!wallets.walletProvider) throw new Error();
      await depositToVault(wallets.walletProvider, {
        depositAmount: payload.collateralAmount,
        debtAmount: payload.debtAmount,
      });

      dispatch(addVault({
        owner: wallets.connectedAddress,
        debt: payload.debtAmount,
        collateral: payload.collateralAmount,
      }));

      dispatch(incrementTransactionsCounter());
    } catch (err: any) {
      if (err?.code !== METAMASK_REJECTED_TRANSACTION_CODE) {
        dispatch(showMessage({
          type: 'error',
          content: `Failed to dispatch transaction, try again.`,
        }));
      }
    } finally {
      dispatch(setIsPerformingTransaction(false));
    }
  },
);