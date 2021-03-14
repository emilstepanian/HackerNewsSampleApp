import React from 'react';
import 'react-native-gesture-handler'; //As per https://reactnavigation.org/docs/getting-started/
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation';
import { store } from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
