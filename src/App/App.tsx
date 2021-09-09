import 'normalize.css';
import '../assets/scss/main.scss';

import TheHeader from '@components/TheHeader/TheHeader';
import TheFooter from '@components/TheFooter/TheFooter';

import Routing from './Routing';
import { AppWrapperStyled, AppContentStyled } from './styleds/index';

function App() {
  return (
    <AppWrapperStyled>
      <div>
        <TheHeader />
      </div>

      <AppContentStyled>
        <Routing />
      </AppContentStyled>

      <div>
        <TheFooter />
      </div>
    </AppWrapperStyled>
  );
}

export default App;
