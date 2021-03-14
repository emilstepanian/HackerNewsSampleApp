import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Header, Screen } from '../../components';
import { Sizes } from '../../constants';
import { AppState } from '../../store/initialState';
import StoryInfo from './StoryInfo';
import AuthorInfo from './AuthorInfo';

const NewsList = () => {
  const navigation = useNavigation();

  const {
    stories: { selectedStory },
  } = useSelector((state: AppState) => state);

  return (
    <Screen style={styles.container}>
      <Header
        title={selectedStory.title}
        onNavBack={() => navigation.goBack()}
      />
      <StoryInfo />
      <AuthorInfo />
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

export default NewsList;
