import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';
import { Palette } from '../../constants';
import { AppState } from '../../store/initialState';
import { Story } from '../../types';
import StoryListItem from './ListItem';

interface StoryListProps {
  stories: Story[] | null;
  onStoryPress: (story: Story) => void;
  onRefreshPull?: () => void;
}

const StoryList = ({
  stories,
  onRefreshPull,
  onStoryPress,
}: StoryListProps) => {
  const {
    ui: { isLoading },
  } = useSelector((state: AppState) => state);

  return (
    <FlatList
      refreshing={isLoading}
      data={stories}
      refreshControl={
        <RefreshControl
          colors={[Palette.white, Palette.secondary]}
          progressBackgroundColor={Palette.primary}
          refreshing={false}
          onRefresh={() => onRefreshPull && onRefreshPull()}
        />
      }
      renderItem={({ item }) => (
        <StoryListItem onPress={() => onStoryPress(item)} story={item} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default StoryList;
