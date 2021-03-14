import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from '../../components';
import PropDisplay from '../../components/PropDisplay';
import { formatEpochToDateString } from '../../helpers/formatEpochToDate';
import { AppState } from '../../store/initialState';

const ArticleInfo = () => {
  const stableDispatch = useCallback(useDispatch(), []);

  const {
    stories: { selectedStory },
  } = useSelector((state: AppState) => state);

  return (
    <View>
      <PropDisplay
        value={formatEpochToDateString(selectedStory.time)}
        prop="Date Created"
      />
      <PropDisplay value={selectedStory.score} prop="Score" />
      <PropDisplay
        onPropPress={(value) => {}}
        value={selectedStory.url}
        prop="URL"
      />
    </View>
  );
};

export default ArticleInfo;
