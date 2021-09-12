import { ethers } from 'ethers';
import type { Chain, BaseProvider, Web3Provider } from '@typings/app';

export function makeGeneralProvider(chain: Chain): BaseProvider {
  return new ethers.providers.InfuraProvider(
    chain.endpoint,
    process.env.REACT_APP_INFURA_PROJECT_ID,
  );
}

export function makeWalletProvider(): Web3Provider {
  return new ethers.providers.Web3Provider(window.ethereum!, "any");
}