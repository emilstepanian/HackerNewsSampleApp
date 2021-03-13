import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler'; //As per https://reactnavigation.org/docs/getting-started/
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </>
  );
};

export default App;
