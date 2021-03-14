import { Dispatch } from 'redux';
import { Story } from '../../types';
import {
  SELECT_STORY,
  SET_STORIES,
  StoriesActionTypes,
  UPDATE_STORY,
} from './types';

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

//To showcase use of Partial
export const updateStory = (storyProps: Partial<Story>) => {
  return (dispatch: Dispatch<StoriesActionTypes>) => {
    dispatch({
      type: UPDATE_STORY,
      payload: storyProps,
    });
  };
};
