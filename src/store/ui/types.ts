export const IS_LOADING = 'LOADING';
export interface UiState {
  isLoading: boolean;
}

interface SetLoading {
  readonly type: typeof IS_LOADING;
  payload: boolean;
}

export type UiActionTypes = SetLoading;
