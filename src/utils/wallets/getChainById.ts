import { ChainId } from '@typings/app';
import type { Chain } from '@typings/app';
import { SUPPORTED_CHAINS } from '@config/wallets';

function getChainById(chainId: unknown): Chain | null {
  return SUPPORTED_CHAINS.find(chain => chain.id === chainId as ChainId) || null;
}

export default getChainById;