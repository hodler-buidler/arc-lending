import { useEffect } from 'react';
import { useAppDispatch } from '@state/hooks';
import { isAnyWalletSupported } from '@utils/wallets';
import { setIsAnyWalletSupported } from  '../actions';

function useWallets() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsAnyWalletSupported(isAnyWalletSupported()));
  }, []);
}

export default useWallets;