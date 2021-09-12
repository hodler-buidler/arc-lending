import { FC, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '@state/hooks';
import { useEtherBalance } from '@state/wallets/hooks';
import { borrow } from '@state/lending/thunks';
import { UiField, UiButton } from '@components/ui/index';
import useBorrow from './hooks/useBorrow';
import BorrowDetails from './components/BorrowDetails/BorrowDetails';


const BorrowInterface: FC = () => {
  const dispatch = useAppDispatch();
  const [ collateralAmount, setCollateralAmount ] = useState('0');
  const [ borrowAssetAmount, setBorrowAssetAmount ] = useState('0');
  const { isWalletConnecting, connectedAddress, isPerformingTransaction } = useAppSelector(state => state.wallets);
  const etherBalance = useEtherBalance();

  const {
    currentLTVRatioPercentage,
    isBorrowPossible,
    maxAssetAmount,
  } = useBorrow({ 
    collateralAmount: Number(collateralAmount),
    assetAmountUSD: Number(borrowAssetAmount),
    etherBalance: etherBalance,
  });

  const isWalletConnected = !!connectedAddress;

  function handleBorrow() {
    dispatch(borrow({
      collateralAmount: Number(collateralAmount),
      debtAmount: Number(borrowAssetAmount),
    }));
  }

  return (
    <BorrowInterfaceWrapperStyled>
      <div className="borrow-interface">
        <div className="borrow-interface__field">
          <UiField
            value={collateralAmount}
            onChange={ setCollateralAmount }
            numbersOnly
            maxNumber={etherBalance}
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
            maxNumber={maxAssetAmount}
            rightAdditions={(
              <div className="text-alternative">USD</div>
            )}
          >
            <div className="text-small">
              <span className="text-alternative">Borrow</span> asset
            </div>
          </UiField>
        </div>

        <div className="borrow-interface__footer">
          <BorrowInterfaceFooterStyled>
            <div className="details">
              <BorrowDetails currentLTVRatioPercentage={currentLTVRatioPercentage} />
            </div>

            <div>
              <UiButton
                theme="primary"
                isLoading={isWalletConnecting || isPerformingTransaction}
                disabled={!isBorrowPossible}
                onClick={handleBorrow}
              >
                { isWalletConnected ? 'Initiate borrow' : 'Connect wallet' }
              </UiButton>
            </div>
          </BorrowInterfaceFooterStyled>
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

    &__footer {
      margin-top: 22px;
    }
  }
`;

const BorrowInterfaceFooterStyled = styled.div`
  background: var(--dark-color-5);
  border-radius: 12px;

  & .details {
    padding: 22px;
  }
`;

export default BorrowInterface;