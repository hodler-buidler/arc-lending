import { ethers, BigNumber } from 'ethers';
import type { Web3Provider } from "@typings/app";

export async function fetchEtherBalance(provider: Web3Provider) {
  const signer = provider.getSigner();
  const balanceBigNumber: BigNumber = await signer.getBalance();
  return Number(ethers.utils.formatUnits(balanceBigNumber.toString()));
}