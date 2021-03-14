import { StoriesState, emptyStory } from './stories/types';
import { UiState } from './ui/types';

export interface AppState {
  ui: UiState;
  stories: StoriesState;
}

export const initialState: AppState = {
  ui: {
    isLoading: false,
  },
  stories: {
    stories: null,
    selectedStory: emptyStory,
  },
};
