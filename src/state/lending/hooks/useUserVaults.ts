import { useAppSelector } from '@state/hooks';

function useUserVaults() {
  const { allVaults } = useAppSelector(state => state.lending);
  const { connectedAddress } = useAppSelector(state => state.wallets);

  const userVaults = allVaults.filter(vault => vault.owner === connectedAddress);

  return { userVaults };
}

export default useUserVaults;
