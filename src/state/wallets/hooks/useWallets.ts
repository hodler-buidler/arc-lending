import { useEffect } from 'react';
import { useAppDispatch } from '@state/hooks';
import {
  isAnyWalletSupported,
  getCurrentChainId,
  isChainIdSupported,
} from '@utils/wallets';
import {
  setIsAnyWalletSupported,
  setIsSupportedChainEnabled,
  setIsEthereumProviderConnected,
  setConnectedAddress,
  setIsWalletConnecting,
} from  '../actions';

function useWallets() {
  const dispatch = useAppDispatch();
  const ethereum = window?.ethereum;

  useEffect(() => {
    dispatch(setIsAnyWalletSupported(isAnyWalletSupported()));
    dispatch(setIsEthereumProviderConnected(!!ethereum?.isConnected()));

    // It seems like window.ethereum object takes time on page load to produce values
    setTimeout(() => {
      dispatch(setIsSupportedChainEnabled(isChainIdSupported(getCurrentChainId())));
      dispatch(setConnectedAddress(ethereum?.selectedAddress || ''));
      dispatch(setIsWalletConnecting(false));
    }, 1000);
  }, []);

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
}

export default useWallets;