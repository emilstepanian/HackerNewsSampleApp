import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Header, Screen, StoryList } from '../../components';
import { Sizes } from '../../constants';
import { AppState } from '../../store/initialState';
import { Story } from '../../types';

const NewsList = () => {
  const navigation = useNavigation();

  const {
    stories: { stories },
  } = useSelector((state: AppState) => state);

  const onStoryPress = (story: Story) => {
    console.log(story.score);
  };

  return (
    <Screen style={styles.container}>
      <Header title="Top stories" onNavBack={() => navigation.goBack()} />
      <StoryList stories={stories} onStoryPress={onStoryPress} />
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
