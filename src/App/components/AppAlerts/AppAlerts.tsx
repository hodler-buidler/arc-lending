import { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@state/hooks';
import NoSupportedWalletsAlert from './components/NoSupportedWalletsAlert';
import UnsupportedChainAlert from './components/UnsupportedChainAlert';

const AppAlerts: FC = () => {
  const { isAnyWalletSupported, isSupportedChainEnabled } = useAppSelector(state => state.wallets);

  const areAlertsEmpty = isAnyWalletSupported && isSupportedChainEnabled;

  return (
    <AlertsWrapperStyled areAlertsEmpty={areAlertsEmpty}>
      { !isAnyWalletSupported && (
        <div className="app-alert-item">
          <NoSupportedWalletsAlert />
        </div>
      )}
      { (isAnyWalletSupported && !isSupportedChainEnabled) && (
        <div className="app-alert-item">
          <UnsupportedChainAlert />
        </div>
      )}
    </AlertsWrapperStyled>
  )
}

const AlertsWrapperStyled = styled.div<{
  areAlertsEmpty: boolean;
}>`
  max-width: 800px;
  margin: auto;

  & .app-alert-item {
    margin-bottom: 12px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${({ areAlertsEmpty }) => !areAlertsEmpty ? `
    margin-bottom: 40px;
  ` : ``}
`;

export default AppAlerts;
