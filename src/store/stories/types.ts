import { Story } from '../../types';

export const SET_STORIES = 'SET_STORIES';
export interface StoriesState {
  stories: Story[] | null;
}

interface setStories {
  readonly type: typeof SET_STORIES;
  payload: Story[];
}

export type StoriesActionTypes = setStories;
