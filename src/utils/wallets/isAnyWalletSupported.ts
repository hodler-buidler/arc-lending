import { SUPPORTED_WALLETS } from '@config/wallets';

function isAnyWalletSupported(): boolean {
  const supportedWallets = SUPPORTED_WALLETS.filter(wallet => wallet.isSupported());
  return !!supportedWallets.length;
}

export default isAnyWalletSupported;