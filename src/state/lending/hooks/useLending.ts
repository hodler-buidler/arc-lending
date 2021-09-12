import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@state/hooks'
import {
  setMaxLTVRatio,
  setCollateralPriceUSD,
  setIsMaxLTVRatioLoading,
  setIsCollateralPriceLoading,
} from '../actions';
import {
  loadMaxLTVRatio,
  loadCollateralPrice,
} from '../thunks';

function useLending() {
  const dispatch = useAppDispatch();
  const { generalProvider } = useAppSelector(state => state.wallets);

  useEffect(() => {
    if (generalProvider) {
      dispatch(loadMaxLTVRatio());
      dispatch(loadCollateralPrice());
    } else {
      dispatch(setMaxLTVRatio(0));
      dispatch(setCollateralPriceUSD(0));
      dispatch(setIsMaxLTVRatioLoading(false));
      dispatch(setIsCollateralPriceLoading(false));
    }
  }, [generalProvider])
}

export default useLending;