import { BigNumber } from 'ethers';

export type VaultResponse = {
  owner: string;
  collateral: BigNumber;
  debt: BigNumber;
}

export type Vault = {
  owner: string;
  collateral: number;
  debt: number;
}
