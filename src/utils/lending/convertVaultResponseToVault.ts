import { ethers } from 'ethers';
import { VaultResponse, Vault } from "@typings/lending";

function convertVaultResponseToVault(vaultResponse: VaultResponse): Vault {
  return {
    owner: vaultResponse.owner,
    debt: Number(ethers.utils.formatUnits(vaultResponse.debt.toString())),
    collateral: Number(ethers.utils.formatUnits(vaultResponse.collateral.toString())),
  }
}

export default convertVaultResponseToVault;
