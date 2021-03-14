import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { View } from '../../components';
import PropDisplay from '../../components/PropDisplay';
import { formatEpochToDateString } from '../../helpers/formatEpochToDate';
import { useLabels } from '../../hooks/useLabels';
import { Routes } from '../../navigation/types';
import { AppState } from '../../store/initialState';

const StoryInfo = () => {
  const {
    stories: { selectedStory },
  } = useSelector((state: AppState) => state);
  const { story } = useLabels();

  const navigation = useNavigation();
  return (
    <View>
      <PropDisplay
        value={formatEpochToDateString(selectedStory.time)}
        prop={story.dateCreated}
      />
      <PropDisplay value={selectedStory.score} prop={story.score} />
      <PropDisplay
        onPropPress={() => navigation.navigate(Routes.WEBVIEW)}
        value={selectedStory.url}
        prop={story.url}
      />
    </View>
  );
};

export default StoryInfo;
