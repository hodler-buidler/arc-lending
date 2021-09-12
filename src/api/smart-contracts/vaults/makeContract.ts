import { ethers } from 'ethers';
import { BaseProvider } from "@typings/app";
import  vaultsAbi from '@abis/vaults.json';
import { VAULTS_CONTRACT_ADDRESS } from '@config/wallets';

function makeContract(provider: BaseProvider) {
  return new ethers.Contract(
    VAULTS_CONTRACT_ADDRESS,
    vaultsAbi,
    provider,
  );
}

export default makeContract;
