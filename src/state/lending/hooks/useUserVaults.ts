import { useAppSelector } from '@state/hooks';
import { sortASC } from '@utils/sort-callbacks'

function useUserVaults() {
  const { allVaults } = useAppSelector(state => state.lending);
  const { connectedAddress } = useAppSelector(state => state.wallets);

  const userVaults = allVaults.filter(vault => {
    return vault.owner.toLowerCase() === connectedAddress.toLowerCase();
  }).sort(sortASC);

  return { userVaults };
}

export default useUserVaults;
