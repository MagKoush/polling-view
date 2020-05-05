import { GET_VOTES_BY_ELECTION_SUCCESS } from '../actions';

/**
 * Vote reducer to render the components
 *
 * @param {any} state   - Previous state from a dispatch
 * @param {any} action  - Action object to dispatch from an epic
 * @returns {any} new state to render the components with
 */
export default (state = {}, action: any): any => {
  switch (action.type) {
    case GET_VOTES_BY_ELECTION_SUCCESS:
      return [...action.votes];
    default:
      return state;
  }
};
