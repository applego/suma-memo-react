import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App';
import store, { persistor } from './configureStore';
import ThemeContextProvider from './theme/themeContext';

// persistor.purge()

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
