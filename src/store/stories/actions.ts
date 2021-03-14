import { Dispatch } from 'redux';
import { Story } from '../../types';
import { SET_STORIES, StoriesActionTypes } from './types';

export const setStories = (stories: Story[]) => {
  return (dispatch: Dispatch<StoriesActionTypes>) => {
    dispatch({
      type: SET_STORIES,
      payload: stories,
    });
  };
};
