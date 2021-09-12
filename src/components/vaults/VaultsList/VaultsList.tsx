import { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@state/hooks';
import { useUserVaults } from '@state/lending/hooks';
import { UiSkeleton, UiAlert } from '@components/ui/index';
import VaultCard from '@components/vaults/VaultCard/VaultCard';

const VaultsList: FC = () => {
  const { areVaultsLoading } = useAppSelector(state => state.lending);
  const { userVaults } = useUserVaults();

  return (
    <VaultsListWrapperStyled>
      {areVaultsLoading && (
        <UiSkeleton
          height={90}
          count={2}
          style={{ borderRadius: '20px', marginBottom: '24px'}}
        />
      )}

      {(!areVaultsLoading && !userVaults.length) && (
        <UiAlert>You don't have any vaults yet</UiAlert>
      )}

      {(!areVaultsLoading && !!userVaults.length) && userVaults.map((vault, index) => (
        <div key={index} className="vault-card">
          <VaultCard vault={vault} />
        </div>
      ))}
    </VaultsListWrapperStyled>
  );
}

const VaultsListWrapperStyled = styled.div`
  & .vault-card {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default VaultsList;
