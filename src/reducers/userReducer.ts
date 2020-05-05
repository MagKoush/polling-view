import { AUTHENTICATE_USER_SUCCESS, GET_USER_SUCCESS } from '../actions';

/**
 * User reducer to render the components
 *
 * @param {any} state   - Previous state from a dispatch
 * @param {any} action  - Action object to dispatch from an epic
 * @returns {any} new state to render the components with
 */
export default (state = {}, action: any): any => {
  switch (action.type) {
    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...action.user,
      };
    default:
      return state;
  }
};
