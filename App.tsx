import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler'; //As per https://reactnavigation.org/docs/getting-started/
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation';
import { store } from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
