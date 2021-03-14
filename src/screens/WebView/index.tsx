import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Loader, Screen, View } from '../../components';
import { Sizes } from '../../constants';

import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/initialState';

const ExternalWebView = () => {
  const navigation = useNavigation();

  const {
    stories: { selectedStory },
  } = useSelector((state: AppState) => state);

  return (
    <Screen style={styles.container}>
      <Header title={''} onNavBack={() => navigation.goBack()} />
      <WebView
        source={{ uri: selectedStory.url }}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={StyleSheet.absoluteFillObject}>
            <Loader />
          </View>
        )}
      />
    </Screen>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: Sizes.padding,
  },
});

export default ExternalWebView;
