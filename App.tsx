import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import {store} from './src/data';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {View} from 'react-native';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{width: '100%', height: '100%'}}>
        <Provider store={store}>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </Provider>
      </View>
    </GestureHandlerRootView>
  );
};
export default App;
