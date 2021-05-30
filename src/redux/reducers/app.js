import ACTIONS from '../actions/types';

export const initialState = {
  isLoading: false,
  isAPIHealthIsOK: false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_GLOBAL_LOADING: {
      const newState = {
        ...state,
        isLoading: action.payload,
      };
      return newState;
    }

    case ACTIONS.API_SET_HEALTH_INFO: {
      const newState = {
        ...state,
        isAPIHealthIsOK: action.payload,
      };
      return newState;
    }

    default: {
      return state;
    }
  }
}
