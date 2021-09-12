import { useEffect, useState } from 'react';
import type { Web3Provider } from "@typings/app";
import { fetchEtherBalance } from '@api/web3';
import { useAppDispatch, useAppSelector } from '@state/hooks';
import { showMessage } from '@state/app/actions';

function useEtherBalance() {
  const dispatch = useAppDispatch();
  const [ etherBalance, setEtherBalance ] = useState(0);
  const { connectedAddress, walletProvider, transactionsCounter } = useAppSelector(state => state.wallets);

  useEffect(() => {
    if (connectedAddress && walletProvider) {
      fetchBalance(walletProvider);
    }
  }, [connectedAddress, walletProvider, transactionsCounter]);

  async function fetchBalance(provider: Web3Provider) {
    try {
      const balance = await fetchEtherBalance(provider);
      setEtherBalance(balance);
    } catch (err) {
      dispatch(showMessage({
        type: 'error',
        content: `Couldn't fetch ether balance`,
      }));
    }
  }

  return etherBalance;
}

export default useEtherBalance;