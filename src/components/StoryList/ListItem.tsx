import React from 'react';
import { Badge, ListItem, ListItemProps } from 'react-native-elements';
import { Palette } from '../../constants';
import { formatEpochToDateString } from '../../helpers/formatEpochToDate';
import { Story } from '../../types';
import { styles } from './styles';
interface StoryListItemProps extends ListItemProps {
  story: Story;
}

const StoryListItem = ({ story, ...props }: StoryListItemProps) => {
  return (
    <ListItem {...props}>
      <ListItem.Content>
        <ListItem.Title>{story.title}</ListItem.Title>
        <ListItem.Subtitle style={styles.listItemSubtitle}>
          {formatEpochToDateString(story.time)}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Content right>
        <Badge value={story.score} badgeStyle={styles.listItemBadge} />
      </ListItem.Content>
      <ListItem.Chevron color={Palette.primary} />
    </ListItem>
  );
};

export default StoryListItem;
