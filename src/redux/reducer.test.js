import appReducer, { initialState as appInitialState } from './reducers/app';
import ACTIONS from './actions/types';

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual({ ...appInitialState });
  });

  it('should handle SET_GLOBAL_LOADING', () => {
    expect(
      appReducer(
        { ...appInitialState },
        {
          type: ACTIONS.SET_GLOBAL_LOADING,
          payload: true,
        }
      )
    ).toEqual({
      isLoading: true,
      isAPIHealthIsOK: false
    });
  });
});
