import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Palette } from '../../constants';
import { Story } from '../../types';
import StoryListItem from './ListItem';

interface StoryListProps {
  stories: Story[] | null;
  onStoryPress: (story: Story) => void;
}

const StoryList = ({ stories, onStoryPress }: StoryListProps) => {
  return (
    <FlatList
      data={stories}
      refreshControl={
        <RefreshControl
          colors={[Palette.white, Palette.secondary]}
          progressBackgroundColor={Palette.primary}
          refreshing={false}
          onRefresh={() => {}}
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
