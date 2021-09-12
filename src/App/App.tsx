import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/scss/main.scss';

import { ToastContainer } from 'react-toastify';

import { useWallets } from '@state/wallets/hooks';
import { useLending } from '@state/lending/hooks';

import TheHeader from '@components/TheHeader/TheHeader';
import TheFooter from '@components/TheFooter/TheFooter';

import useAppMessages from './hooks/useAppMessages';
import Routing from './components/Routing/Routing';
import AppAlerts from './components/AppAlerts/AppAlerts';
import { AppWrapperStyled, AppContentStyled } from './styleds/index';


function App() {
  useWallets();
  useLending();
  useAppMessages();

  return (
    <AppWrapperStyled>
      <div>
        <TheHeader />
      </div>

      <AppContentStyled>
        <ToastContainer />
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
