import { createAction } from '@reduxjs/toolkit';

export const setMaxLTVRatio = createAction<number>('lending/setMaxLTVRatio');
export const setIsMaxLTVRatioLoading = createAction<boolean>('lending/setIsMaxLTVRatioLoading');
export const setCollateralPriceUSD = createAction<number>('lending/setCollateralPriceUSD');
export const setIsCollateralPriceLoading = createAction<boolean>('lending/setIsCollateralPriceLoading');