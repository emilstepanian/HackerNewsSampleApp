import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Loader, Text, View } from '../../components';
import PropDisplay from '../../components/PropDisplay';
import { Sizes } from '../../constants';
import { useAuthorInfo } from '../../hooks/useAuthorInfo';
import { useLabels } from '../../hooks/useLabels';
import { AppState } from '../../store/initialState';

const AuthorInfo = () => {
  const { article } = useLabels();
  const {
    stories: {
      selectedStory: { userData },
    },
  } = useSelector((state: AppState) => state);

  useAuthorInfo();

  return (
    <View style={styles.content}>
      <Text h2 bold>
        {article.authorInfo}
      </Text>
      {userData ? (
        <View>
          <PropDisplay value={userData.id} prop={article.by} />
          <PropDisplay value={userData.karma} prop={article.authorKarma} />
        </View>
      ) : (
        <Loader loadingText={article.loadingAuthorInfo} />
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  content: {
    paddingTop: Sizes.padding,
    flex: 1,
  },
});

export default AuthorInfo;
