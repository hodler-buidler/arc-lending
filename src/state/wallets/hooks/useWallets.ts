import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@state/hooks';
import { makeGeneralProvider } from '@logic/ethereum';
import { DEFAULT_CHAIN } from '@config/wallets';
import {
  isAnyWalletSupported,
  getCurrentChainId,
  isChainIdSupported,
  getChainById,
} from '@utils/wallets';
import {
  setIsAnyWalletSupported,
  setIsSupportedChainEnabled,
  setIsEthereumProviderConnected,
  setConnectedAddress,
  setIsWalletConnecting,
  setGeneralProvider,
} from  '../actions';

function useWallets() {
  const dispatch = useAppDispatch();
  const { isSupportedChainEnabled } = useAppSelector(state => state.wallets);
  const [ isMounted, setIsMounted ] = useState(false);
  const ethereum = window?.ethereum;

  useEffect(() => {
    dispatch(setIsAnyWalletSupported(isAnyWalletSupported()));
    dispatch(setIsEthereumProviderConnected(!!ethereum?.isConnected()));

    if (!isAnyWalletSupported()) {
      dispatch(setGeneralProvider(makeGeneralProvider(DEFAULT_CHAIN)));
    }

    // It seems like window.ethereum object takes time on page load to produce values
    setTimeout(() => {
      dispatch(setIsSupportedChainEnabled(isChainIdSupported(getCurrentChainId())));
      dispatch(setConnectedAddress(ethereum?.selectedAddress || ''));
      dispatch(setIsWalletConnecting(false));
      if (isAnyWalletSupported() && isSupportedChainEnabled) {
        setGeneralProviderAccordingToCurrentChain();
      }
      setIsMounted(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (isAnyWalletSupported() && isMounted) {
      if (isSupportedChainEnabled) {
        setGeneralProviderAccordingToCurrentChain();
      } else {
        dispatch(setGeneralProvider(null));
      }
    }
  }, [isSupportedChainEnabled]);

  useEffect(() => {
    ethereum?.on('connect', handleConnect);
    ethereum?.on('disconnect', handleDisconnect);
    ethereum?.on('accountsChanged', handleAccountsChanged);
    ethereum?.on('chainChanged', handleChainChanged);

    return () => {
      ethereum?.removeListener('connect', handleConnect);
      ethereum?.removeListener('disconnect', handleDisconnect);
      ethereum?.removeListener('accountsChanged', handleAccountsChanged);
      ethereum?.removeListener('chainChanged', handleChainChanged);
    }
  }, [])

  function handleConnect() {
    dispatch(setIsEthereumProviderConnected(!!ethereum?.isConnected()));
  }

  function handleDisconnect() {
    dispatch(setIsEthereumProviderConnected(false));
  }

  function handleAccountsChanged(accounts: string[]) {
    dispatch(setConnectedAddress(accounts[0] || ''));
  }

  function handleChainChanged(chainId: string) {
    dispatch(setIsSupportedChainEnabled(isChainIdSupported(chainId)));
  }

  function setGeneralProviderAccordingToCurrentChain(): void {
    const enabledChain = getChainById(getCurrentChainId())!;
    const provider = makeGeneralProvider(enabledChain);
    dispatch(setGeneralProvider(provider));
  }
}

export default useWallets;