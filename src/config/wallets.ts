import type { Wallet } from '@typings/app';
import METAMASK_WALLET from '@logic/wallets/metamask';

export const SUPPORTED_WALLETS: readonly Wallet[] = Object.freeze([
  METAMASK_WALLET,
]);
