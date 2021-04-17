import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App';
import store, { persistor } from './configureStore';
//todo
import ThemeContextProvider from './theme/themeContext';

// persistor.purge()

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
