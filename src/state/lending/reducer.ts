import { createReducer } from '@reduxjs/toolkit';
import type { Vault } from "@typings/lending";
import {
  setMaxLTVRatio,
  setIsMaxLTVRatioLoading,
  setCollateralPriceUSD,
  setIsCollateralPriceLoading,
  setAllVaults,
  setAreVaultsLoading,
} from './actions';

export interface LendingState {
  maxLTVRatio: number;
  isMaxLTVRatioLoading: boolean;
  collateralPriceUSD: number;
  isCollateralPriceLoading: boolean;
  allVaults: Vault[];
  areVaultsLoading: boolean;
};

export const initialState: LendingState = {
  maxLTVRatio: 0,
  isMaxLTVRatioLoading: true,
  collateralPriceUSD: 0,
  isCollateralPriceLoading: true,
  allVaults: [],
  areVaultsLoading: true,
};

export default createReducer(initialState, builder => 
  builder
    .addCase(setMaxLTVRatio, (state, { payload }) => {
      state.maxLTVRatio = payload;
    })
    .addCase(setIsMaxLTVRatioLoading, (state, { payload }) => {
      state.isMaxLTVRatioLoading = payload;
    })
    .addCase(setCollateralPriceUSD, (state, { payload }) => {
      state.collateralPriceUSD = payload;
    })
    .addCase(setIsCollateralPriceLoading, (state, { payload }) => {
      state.isCollateralPriceLoading = payload;
    })
    .addCase(setAllVaults, (state, { payload }) => {
      state.allVaults = payload;
    })
    .addCase(setAreVaultsLoading, (state, { payload }) => {
      state.areVaultsLoading = payload;
    })
);