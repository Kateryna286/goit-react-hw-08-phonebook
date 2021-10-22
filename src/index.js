import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';
import { store, persistor } from './Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} persistor={persistor}>
      {/* <PersistGate loading={null}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
