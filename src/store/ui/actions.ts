import { Dispatch } from 'redux';
import { IS_INITIALIZING, IS_LOADING, UiActionTypes } from './types';

export const setLoading = (isLoading: boolean) => {
  return (dispatch: Dispatch<UiActionTypes>) => {
    dispatch({
      type: IS_LOADING,
      payload: isLoading,
    });
  };
};

export const setAppInitializing = (isAppInitializing: boolean) => {
  return (dispatch: Dispatch<UiActionTypes>) => {
    dispatch({
      type: IS_INITIALIZING,
      payload: isAppInitializing,
    });
  };
};
