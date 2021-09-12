import { useAppSelector } from '@state/hooks';

type HookArgs = {
  collateralAmount: number;
  assetAmountUSD: number;
  etherBalance: number;
}


function useBorrow({
  collateralAmount,
  assetAmountUSD,
  etherBalance
}: HookArgs) {
  const { collateralPriceUSD, maxLTVRatio } = useAppSelector(state => state.lending);
  const { connectedAddress, generalProvider } = useAppSelector(state => state.wallets);

  const isWalletConnected = !!connectedAddress;

  const currentCollateralPriceUSD = collateralAmount * collateralPriceUSD;

  let currentLTVRatio = (assetAmountUSD / currentCollateralPriceUSD);
  if (!Number.isFinite(currentLTVRatio) || !currentLTVRatio) currentLTVRatio = 0;
  const currentLTVRatioPercentage = currentLTVRatio * 100;

  const maxAssetAmount = etherBalance * collateralPriceUSD * maxLTVRatio;

  const isCurrentLTVRatioValid =  currentLTVRatio <= maxLTVRatio && currentLTVRatio > 0;
  const isBorrowPossible = isCurrentLTVRatioValid && generalProvider && isWalletConnected;

  return {
    maxAssetAmount,
    currentLTVRatioPercentage,
    isBorrowPossible,
  };
}

export default useBorrow;
