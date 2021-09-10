import type { Wallet } from '@typings/app';
import { SUPPORTED_WALLETS } from '@config/wallets';

function getInstallableWallets(): Wallet[] {
  return SUPPORTED_WALLETS.filter(wallet => wallet.installable);
}

export default getInstallableWallets;