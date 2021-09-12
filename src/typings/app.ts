import { ethers } from 'ethers';

export enum WalletType {
  MetaMask,
}

export enum ChainId {
  EthereumMain = "0x1",
  RopstenTest = "0x3",
  RinkebyTest = "0x4",
  GoerliTest = "0x5",
  KovanTest = "0x2a",
}

export interface Chain {
  id: ChainId;
  name: string;
  endpoint: string;
}

export interface Wallet {
  type: WalletType;
  name: string;
  logo: string;
  installable: boolean;
  installLink: string;
  isSupported: () => boolean;
}

export type BaseProvider = ethers.providers.BaseProvider;
export type Web3Provider = ethers.providers.Web3Provider;

export type AppMessage = {
  type: 'info' | 'success' | 'warn' | 'error',
  content: string;
}
