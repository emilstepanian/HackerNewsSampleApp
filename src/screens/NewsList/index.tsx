import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Screen, StoryList, View } from '../../components';
import { Sizes } from '../../constants';
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

  const onStoryPress = (story: Story) => {
    dispatch(updateSelectedStory(story));
    navigation.navigate(Routes.ARTICLE);
  };

  return (
    <Screen style={styles.container}>
      <Header title="Top stories" onNavBack={() => navigation.goBack()} />
      <View style={styles.list}>
        <StoryList stories={stories} onStoryPress={onStoryPress} />
      </View>
    </Screen>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: Sizes.padding,
  },

  list: {
    paddingTop: Sizes.padding,
    flex: 1,
  },
});

export default NewsList;
