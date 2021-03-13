import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler'; //As per https://reactnavigation.org/docs/getting-started/
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider />
    </>
  );
};

export default App;
