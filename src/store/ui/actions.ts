import { Dispatch } from 'redux';
import { IS_LOADING, UiActionTypes } from './types';

export const setLoading = (isLoading: boolean) => {
  return (dispatch: Dispatch<UiActionTypes>) => {
    dispatch({
      type: IS_LOADING,
      payload: isLoading,
    });
  };
};
