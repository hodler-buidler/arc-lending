import { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@state/hooks';
import NoSupportedWalletsAlert from './components/NoSupportedWalletsAlert';

const AppAlerts: FC = () => {
  const { isAnyWalletSupported } = useAppSelector(state => state.wallets);

  const areAlertsEmpty = isAnyWalletSupported;

  return (
    <AlertsWrapperStyled areAlertsEmpty={areAlertsEmpty}>
      { !isAnyWalletSupported && (
        <div className="app-alert-item">
          <NoSupportedWalletsAlert />
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
