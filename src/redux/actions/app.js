import ACTIONS from './types';

export function init(params) {
  return async (dispatch, getState) => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    dispatch({ type: ACTIONS.SET_LOADING, payload: false });
  };
}
