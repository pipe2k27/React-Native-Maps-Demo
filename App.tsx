import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import Routes from './src/routes/routes';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
