import { Story } from '../../types';

export const SET_STORIES = 'SET_STORIES';
export const SELECT_STORY = 'SELECT_STORY';
export const UPDATE_STORY = 'UPDATE_STORY';

export interface StoriesState {
  stories: Story[] | null;
  selectedStory: Story;
}

export const emptyStory: Story = {
  by: '',
  id: 0,
  score: 0,
  time: 0,
  title: '',
  url: '',
  userData: {
    id: '',
    karma: 0,
  },
};

interface SetStories {
  readonly type: typeof SET_STORIES;
  payload: Story[];
}

interface UpdateSelectedStory {
  readonly type: typeof SELECT_STORY;
  payload: Story;
}

//To showcase use of Partial
interface UpdateStory {
  readonly type: typeof UPDATE_STORY;
  payload: Partial<Story>;
}

export type StoriesActionTypes = SetStories | UpdateSelectedStory | UpdateStory;
