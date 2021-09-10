import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App/App';
import store from './state'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
