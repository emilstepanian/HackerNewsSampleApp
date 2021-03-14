import { initialState } from '../initialState';
import { SET_STORIES, StoriesActionTypes, StoriesState } from './types';

const stories = (
  state: StoriesState = initialState.stories,
  action: StoriesActionTypes
): StoriesState => {
  switch (action.type) {
    case SET_STORIES:
      return {
        ...state,
        stories: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default stories;
