import { FC } from 'react';
import styled from 'styled-components';
import VaultsList from '@components/vaults/VaultsList/VaultsList';

const Page: FC = () => {
  return (
    <VaultsPageWrapperStyled>
      <div className="vaults-page-content">
        <div>
          <div>
            <h1 className="heading-3 text-alternative">Vaults</h1>
          </div>
          <div>
            <span>View all the ARCx vaults open at the moment</span>
          </div>
        </div>

        <div className="vaults-page-content__list">
          <VaultsList />
        </div>
      </div>
    </VaultsPageWrapperStyled>
  ); 
}

const VaultsPageWrapperStyled = styled.div`
  padding: 0 120px;
  max-width: 1400px;
  margin: auto;

  & .vaults-page-content {
    &__list {
      margin-top: 38px;
    }
  }
`;

export default Page;