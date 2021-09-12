import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchMaxLTVRatio,
  fetchCollateralPriceUSD,
} from '@api/smart-contracts/vaults'
import { showMessage } from '@state/app/actions';
import {
  setIsMaxLTVRatioLoading,
  setIsCollateralPriceLoading,
  setMaxLTVRatio,
  setCollateralPriceUSD,
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
