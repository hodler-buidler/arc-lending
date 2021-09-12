import type { Chain } from '@typings/app';
import { ChainId } from '@typings/app';

export const ETHEREUM_MAINNET_CHAIN: Chain = Object.freeze({
  id: ChainId.EthereumMain,
  name: 'Ethereum Mainnet',
  endpoint: 'mainnet',
});

export const ROPSTEN_TESTNET_CHAIN: Chain = Object.freeze({
  id: ChainId.RopstenTest,
  name: 'Ropsten Testnet',
  endpoint: 'ropsten',
});

export const RINKEBY_TESTNET_CHAIN: Chain = Object.freeze({
  id: ChainId.RinkebyTest,
  name: 'Rinkeby Testnet',
  endpoint: 'rinkeby',
});

export const GOERLI_TESTNET_CHAIN: Chain = Object.freeze({
  id: ChainId.GoerliTest,
  name: 'Goerli Testnet',
  endpoint: 'goerli',
});

export const KOVAN_TESTNET_CHAIN: Chain = Object.freeze({
  id: ChainId.KovanTest,
  name: 'Kovan Testnet',
  endpoint: 'kovan',
});