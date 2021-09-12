import { ethers } from 'ethers';
import { BaseProvider } from "@typings/app";
import { Vault, VaultResponse } from "@typings/lending";
import { convertVaultResponseToVault } from '@utils/lending';
import makeContract from './makeContract';

export async function fetchMaxLTVRatio(provider: BaseProvider): Promise<number> {
  const contract = makeContract(provider);
  const ltvRatioBigNumber = await contract.ltvRatio();
  return Number(ethers.utils.formatUnits(ltvRatioBigNumber.toString()));
}

export async function fetchCollateralPriceUSD(provider: BaseProvider): Promise<number> {
  const contract = makeContract(provider);
  const collateralPriceBigNumber = await contract.collateralPrice();
  return Number(ethers.utils.formatUnits(collateralPriceBigNumber.toString()));
}

export async function fetchVaults(provider: BaseProvider): Promise<Vault[]> {
  const contract = makeContract(provider);
  const vaultsCount: number = await contract.vaultsCount();

  const vaultsRequests = [];

  for (let i = 1; i <= vaultsCount; i++) {
    vaultsRequests.push(contract.vaults(i));
  }

  const requestsResults = await Promise.allSettled(vaultsRequests);

  const fulfilledResults = requestsResults.filter(responseItem => responseItem.status === 'fulfilled') as any;

  // No requests got to be successful
  if (!fulfilledResults.length && requestsResults.length) {
    throw new Error();
  }

  return fulfilledResults.map((result: any) => result.value).map(convertVaultResponseToVault);
}
