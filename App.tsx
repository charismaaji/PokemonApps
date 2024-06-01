import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import {store} from './src/data';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
