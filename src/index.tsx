import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from './App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
