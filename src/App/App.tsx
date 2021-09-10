import 'normalize.css';
import '../assets/scss/main.scss';

import { useWallets } from '@state/wallets/hooks';

import TheHeader from '@components/TheHeader/TheHeader';
import TheFooter from '@components/TheFooter/TheFooter';

import Routing from './components/Routing/Routing';
import AppAlerts from './components/AppAlerts/AppAlerts';
import { AppWrapperStyled, AppContentStyled } from './styleds/index';

function App() {
  useWallets();

  return (
    <AppWrapperStyled>
      <div>
        <TheHeader />
      </div>

      <AppContentStyled>
        <AppAlerts />
        <Routing />
      </AppContentStyled>

      <div>
        <TheFooter />
      </div>
    </AppWrapperStyled>
  );
}

export default App;
