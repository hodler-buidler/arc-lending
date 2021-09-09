import { FC, useState } from 'react';
import styled from 'styled-components';
import { UiField } from '@components/ui/index';

const BorrowInterface: FC = () => {
  const [ collateralAmount, setCollateralAmount ] = useState('0');
  const [ borrowAssetAmount, setBorrowAssetAmount ] = useState('0');

  return (
    <BorrowInterfaceWrapperStyled>
      <div className="borrow-interface">
        <div className="borrow-interface__field">
          <UiField
            value={collateralAmount}
            onChange={ setCollateralAmount }
            numbersOnly
            autoFocus
            rightAdditions={(
              <div className="text-alternative">ETH</div>
            )}
          >
            <div className="text-small">
              <span className="text-alternative">Deposit</span> collateral
            </div>
          </UiField>
        </div>

        <div className="borrow-interface__field">
          <UiField
            value={borrowAssetAmount}
            onChange={ setBorrowAssetAmount }
            numbersOnly
            rightAdditions={(
              <div className="text-alternative">USD</div>
            )}
          >
            <div className="text-small">
              <span className="text-alternative">Borrow</span> asset
            </div>
          </UiField>
        </div>
      </div>
    </BorrowInterfaceWrapperStyled>
  ); 
}

const BorrowInterfaceWrapperStyled = styled.div`
  background: var(--dark-color-3);
  border-radius: 20px;
  padding: 24px 24px 50px 24px;

  & .borrow-interface {
    &__field {
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default BorrowInterface;