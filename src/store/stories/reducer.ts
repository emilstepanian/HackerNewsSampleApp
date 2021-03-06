import { initialState } from '../initialState';
import {
  SET_STORIES,
  SELECT_STORY,
  StoriesActionTypes,
  StoriesState,
  UPDATE_STORY,
} from './types';

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

    case SELECT_STORY:
      return {
        ...state,
        selectedStory: action.payload,
      };

    case UPDATE_STORY:
      return {
        ...state,
        selectedStory: {
          ...state.selectedStory,
          ...action.payload,
        },
      };
    default: {
      return state;
    }
  }
};

export default stories;
