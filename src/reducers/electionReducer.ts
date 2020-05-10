import { GET_ELECTION_BY_USER_SUCCESS, GET_ELECTION_PARTICIPANTS_SUCCESS } from '../actions';

/**
 * Election reducer to render the components
 *
 * @param {any} state   - Previous state from a dispatch
 * @param {any} action  - Action object to dispatch from an epic
 * @returns {any} new state to render the components with
 */
export default (state = {}, action: any): any => {
  switch (action.type) {
    case GET_ELECTION_BY_USER_SUCCESS:
      return {
        ...state,
        ...action.election,
      };
    case GET_ELECTION_PARTICIPANTS_SUCCESS:
      return {
        ...state,
        participants: [...action.participants],
      };
    default:
      return state;
  }
};
