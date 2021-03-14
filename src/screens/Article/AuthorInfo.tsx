import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Loader, Text, View } from '../../components';
import PropDisplay from '../../components/PropDisplay';
import { Sizes } from '../../constants';
import { useAuthorInfo } from '../../hooks/useAuthorInfo';
import { AppState } from '../../store/initialState';

const AuthorInfo = () => {
  const {
    stories: {
      selectedStory: { userData },
    },
  } = useSelector((state: AppState) => state);

  useAuthorInfo();

  return (
    <View style={styles.content}>
      <Text h2 bold>
        Author Information
      </Text>
      {userData ? (
        <View>
          <PropDisplay value={userData.id} prop="By" />
          <PropDisplay value={userData.karma} prop="Their karma" />
        </View>
      ) : (
        <Loader loadingText="Loading author" />
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
