import { FC } from 'react';
import styled from 'styled-components';
const ARCX_LOGO = require('@assets/images/assets-logos/arcx.svg').default;

const VaultCard: FC = () => {
  return (
    <VaultCardWrapperStyled>
      <div className="vault-info">
        <div className="vault-info__logo">
          <img className="vault-asset-logo" src={ARCX_LOGO} alt="" />
        </div>

        <div>
          <div className="heading-4">
            <span className="text-alternative">ARCx</span> / wETH
          </div>
          <div>
            <span className="weight-600">Deposit wETH to mint ARCx</span>
          </div>
        </div>
      </div>

      <div className="vault-stats text-right">
        <div className="vault-stats__stat">
          <div className="heading-4">
            <span className={true ? 'text-alternative' : 'text-disabled'}>
              50%
            </span>
          </div>
          <div>
            <span className="weight-600">Current LTV</span>
          </div>
        </div>

        <div className="vault-stats__stat">
          <div className="heading-4">
            <span className={false ? 'text-alternative' : 'text-disabled'}>
              &mdash; wETH
            </span>
          </div>
          <div>
            <span className="weight-600">Deposited</span>
          </div>
        </div>

        <div className="vault-stats__stat">
          <div className="heading-4">
            <span className={false ? 'text-alternative' : 'text-disabled'}>
              &mdash; ARCx
            </span>
          </div>
          <div>
            <span className="weight-600">Borrowed</span>
          </div>
        </div>
      </div>
    </VaultCardWrapperStyled>
  );
}

const VaultCardWrapperStyled = styled.div`
  background: var(--dark-color-3);
  padding: 18px 24px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .vault-info {
    display: flex;
    align-items: center;

    &__logo {
      margin-right: 16px;
    }
  }

  & .vault-asset-logo {
    width: 48px;
    border-radius: 50%;
    user-select: none;
  }

  & .vault-stats {
    display: flex;
    align-items: center;

    &__stat {
      margin-right: 65px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export default VaultCard;
