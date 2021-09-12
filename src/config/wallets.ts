import type { Wallet, Chain } from '@typings/app';
import METAMASK_WALLET from '@logic/wallets/metamask';
import { RINKEBY_TESTNET_CHAIN } from '@logic/chains';

export const VAULTS_CONTRACT_ADDRESS = '0x116ffe052ab4648F257eBE55c8eED0401c808022';

export const SUPPORTED_WALLETS: readonly Wallet[] = Object.freeze([
  METAMASK_WALLET,
]);

export const SUPPORTED_CHAINS: readonly Chain[] = Object.freeze([
  RINKEBY_TESTNET_CHAIN,
]);

export const DEFAULT_CHAIN = SUPPORTED_CHAINS[0];
