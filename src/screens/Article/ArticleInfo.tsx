import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { View } from '../../components';
import PropDisplay from '../../components/PropDisplay';
import { formatEpochToDateString } from '../../helpers/formatEpochToDate';
import { useLabels } from '../../hooks/useLabels';
import { Routes } from '../../navigation/types';
import { AppState } from '../../store/initialState';

const ArticleInfo = () => {
  const {
    stories: { selectedStory },
  } = useSelector((state: AppState) => state);
  const { article } = useLabels();

  const navigation = useNavigation();
  return (
    <View>
      <PropDisplay
        value={formatEpochToDateString(selectedStory.time)}
        prop={article.dateCreated}
      />
      <PropDisplay value={selectedStory.score} prop={article.score} />
      <PropDisplay
        onPropPress={() => navigation.navigate(Routes.WEBVIEW)}
        value={selectedStory.url}
        prop={article.url}
      />
    </View>
  );
};

export default ArticleInfo;
