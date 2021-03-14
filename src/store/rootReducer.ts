import { combineReducers } from 'redux';
import { AppState } from './initialState';
import ui from './ui/reducer';
import stories from './stories/reducer';

const rootReducer = combineReducers<AppState>({
  stories,
  ui,
});

export { rootReducer };
