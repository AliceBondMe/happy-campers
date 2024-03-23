import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import 'modern-normalize';
import './index.css';
import { App } from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename="/happy-campers">
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
