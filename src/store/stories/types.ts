import { Story } from '../../types';

export const SET_STORIES = 'SET_STORIES';
export const SELECT_STORY = 'SELECT_STORY';

export interface StoriesState {
  stories: Story[] | null;
  selectedStory: Story | null;
}

interface SetStories {
  readonly type: typeof SET_STORIES;
  payload: Story[];
}

interface UpdateSelectedStory {
  readonly type: typeof SELECT_STORY;
  payload: Story;
}

export type StoriesActionTypes = SetStories | UpdateSelectedStory;
