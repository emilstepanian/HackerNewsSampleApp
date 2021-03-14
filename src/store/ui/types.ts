export const IS_LOADING = 'LOADING';
export const IS_INITIALIZING = 'INITIALIZING';

export interface UiState {
  isLoading: boolean;
  isAppInitializing: boolean;
}

interface SetLoading {
  readonly type: typeof IS_LOADING;
  payload: boolean;
}

interface SetAppInitializing {
  readonly type: typeof IS_INITIALIZING;
  payload: boolean;
}

export type UiActionTypes = SetLoading | SetAppInitializing;
