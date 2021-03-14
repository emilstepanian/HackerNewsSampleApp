import { Dispatch } from 'redux';
import { Story } from '../../types';
import { SELECT_STORY, SET_STORIES, StoriesActionTypes } from './types';

export const setStories = (stories: Story[]) => {
  return (dispatch: Dispatch<StoriesActionTypes>) => {
    dispatch({
      type: SET_STORIES,
      payload: stories,
    });
  };
};

export const updateSelectedStory = (story: Story) => {
  return (dispatch: Dispatch<StoriesActionTypes>) => {
    dispatch({
      type: SELECT_STORY,
      payload: story,
    });
  };
};
