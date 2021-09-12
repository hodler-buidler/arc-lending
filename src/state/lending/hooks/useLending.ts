import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@state/hooks'
import {
  setMaxLTVRatio,
  setCollateralPriceUSD,
  setIsMaxLTVRatioLoading,
  setIsCollateralPriceLoading,
  setAllVaults,
  setAreVaultsLoading,
} from '../actions';
import {
  loadMaxLTVRatio,
  loadCollateralPrice,
  loadVaults,
} from '../thunks';

function useLending() {
  const dispatch = useAppDispatch();
  const { generalProvider, walletProvider, isSupportedChainEnabled } = useAppSelector(state => state.wallets);

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
  }, [generalProvider]);

  useEffect(() => {
    if (walletProvider && isSupportedChainEnabled) {
      dispatch(loadVaults());
    } else {
      dispatch(setAllVaults([]));
    }
  }, [walletProvider, isSupportedChainEnabled]);
}

export default useLending;