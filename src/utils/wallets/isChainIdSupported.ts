import { ChainId } from '@typings/app';
import { SUPPORTED_CHAINS } from '@config/wallets';

function isChainIdSupported(chainId: unknown): boolean {
  return !!SUPPORTED_CHAINS.find(chain => chain.id === chainId as ChainId);
}

export default isChainIdSupported;