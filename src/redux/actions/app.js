import ACTIONS from './types';
import api from '../../core/api'

// eslint-disable-next-line no-unused-vars
export function init(params) {
  return async (dispatch, getState) => {
    dispatch({ type: ACTIONS.SET_GLOBAL_LOADING, payload: true });
    await dispatch(doHealthCheck());
    dispatch({ type: ACTIONS.SET_GLOBAL_LOADING, payload: false });
    return getState();
  };
}

export function doHealthCheck() {
  return async (dispatch, getState) => {
    dispatch({ type: ACTIONS.API_GET_HEALTH_CHECK });
    try {
      await api.getHealth()
      dispatch({ type: ACTIONS.API_SET_HEALTH_INFO, payload: true });
    } catch(e) {
      dispatch({ type: ACTIONS.API_SET_HEALTH_INFO, payload: false });
    }
    return getState();
  }
}
