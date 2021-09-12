import { createAction } from '@reduxjs/toolkit';
import { Vault } from "@typings/lending";

export const setMaxLTVRatio = createAction<number>('lending/setMaxLTVRatio');
export const setIsMaxLTVRatioLoading = createAction<boolean>('lending/setIsMaxLTVRatioLoading');
export const setCollateralPriceUSD = createAction<number>('lending/setCollateralPriceUSD');
export const setIsCollateralPriceLoading = createAction<boolean>('lending/setIsCollateralPriceLoading');
export const setAllVaults = createAction<Vault[]>('lending/setAllVaults');
export const setAreVaultsLoading = createAction<boolean>('lending/setAreVaultsLoading');