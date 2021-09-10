export enum WalletType {
  MetaMask,
}

export interface Wallet {
  type: WalletType;
  name: string;
  logo: string;
  installable: boolean;
  installLink: string;
  isSupported: () => boolean;
}