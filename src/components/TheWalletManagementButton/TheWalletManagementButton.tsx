import  { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '@state/hooks';
import { SUPPORTED_WALLETS } from '@config/wallets';
import { UiButton } from '@components/ui/index';
import { connectAccount } from '@state/wallets/thunks';
import { shortenStr } from '@utils/filters';

const wallet = SUPPORTED_WALLETS[0];

const WalletManagementButton: FC = () => {
  const dispatch = useAppDispatch();
  const { connectedAddress, isWalletConnecting } = useAppSelector(state => state.wallets);

  const isWalletConnected = !!connectedAddress;

  return (
    <UiButton
      disabled={isWalletConnecting || isWalletConnected}
      onClick={() => dispatch(connectAccount())}
      width="250px"
      height="44px"
      isLoading={isWalletConnecting}
    >
      <ButtonWrapperStyled>
        {isWalletConnected ? (
          <div>
            <span>{ shortenStr(connectedAddress, 6, 4) }</span>
          </div>
        ) : (
          <div className="connect-wallet">
            <img className="connect-wallet__logo" src={wallet.logo} alt='' style={{ width: '30px' }} />
            <div>
              Connect {wallet.name}
            </div>
          </div>
        )}
      </ButtonWrapperStyled>
    </UiButton>
  ); 
}

const ButtonWrapperStyled = styled.div`
  & .connect-wallet {
    display: flex;
    align-items: center;

    &__logo {
      margin-right: 8px
    }
  }
`;

export default WalletManagementButton;
