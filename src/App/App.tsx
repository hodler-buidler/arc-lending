import 'normalize.css';
import '../assets/scss/main.scss';

import TheHeader from '@components/TheHeader/TheHeader';
import TheFooter from '@components/TheFooter/TheFooter';

import Routing from './Routing';
import { AppWrapperStyled } from './styleds/index';

function App() {
  return (
    <AppWrapperStyled>
      <div>
        <TheHeader />
      </div>

      <div>
        <Routing />
      </div>

      <div>
        <TheFooter />
      </div>
    </AppWrapperStyled>
  );
}

export default App;
