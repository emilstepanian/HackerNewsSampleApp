import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Screen, StoryList } from '../../components';
import { Sizes } from '../../constants';
import { useLabels } from '../../hooks/useLabels';
import { Routes } from '../../navigation/types';
import { AppState } from '../../store/initialState';
import { updateSelectedStory } from '../../store/stories/actions';
import { Story } from '../../types';

const NewsList = () => {
  const navigation = useNavigation();

  const {
    stories: { stories },
  } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  const { newsList } = useLabels();
  const onStoryPress = (story: Story) => {
    dispatch(updateSelectedStory(story));
    navigation.navigate(Routes.STORY);
  };

  return (
    <Screen style={styles.container}>
      <Header
        title={newsList.headerTitle}
        onNavBack={() => navigation.goBack()}
      />
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
