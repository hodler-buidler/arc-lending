import { ethers } from 'ethers';
import { BaseProvider } from "@typings/app";
import makeContract from './makeContract';

export async function fetchMaxLTVRatio(provider: BaseProvider) {
  const contract = makeContract(provider);
  const ltvRatioBigNumber = await contract.ltvRatio();
  return Number(ethers.utils.formatUnits(ltvRatioBigNumber.toString())) * 100;
}

export async function fetchCollateralPriceUSD(provider: BaseProvider) {
  const contract = makeContract(provider);
  const collateralPriceBigNumber = await contract.collateralPrice();
  return Number(ethers.utils.formatUnits(collateralPriceBigNumber.toString()));
}
