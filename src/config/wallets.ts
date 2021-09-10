import type { Wallet, Chain } from '@typings/app';
import METAMASK_WALLET from '@logic/wallets/metamask';
import { RINKEBY_TESTNET_CHAIN } from '@logic/chains';

export const SUPPORTED_WALLETS: readonly Wallet[] = Object.freeze([
  METAMASK_WALLET,
]);

export const SUPPORTED_CHAINS: readonly Chain[] = Object.freeze([
  RINKEBY_TESTNET_CHAIN,
]);
