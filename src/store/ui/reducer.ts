import { initialState } from '../initialState';
import { IS_INITIALIZING, IS_LOADING, UiActionTypes, UiState } from './types';

const ui = (
  state: UiState = initialState.ui,
  action: UiActionTypes
): UiState => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case IS_INITIALIZING:
      return {
        ...state,
        isAppInitializing: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default ui;
