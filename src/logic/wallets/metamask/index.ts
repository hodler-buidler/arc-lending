import type { Wallet } from '@typings/app';
import { WalletType } from '@typings/app';

const METAMASK_LOGO = require('@assets/images/metamask-logo.svg').default;

const metamaskWallet: Wallet = Object.freeze({
  type: WalletType.MetaMask,
  name: 'MetaMask',
  logo: METAMASK_LOGO,
  installable: true,
  installLink: 'https://metamask.io/download',
  isSupported() {
    return !!window && !!window?.ethereum?.isMetaMask;
  },
});

export default metamaskWallet;