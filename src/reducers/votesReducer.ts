import { GET_VOTES_BY_ELECTION_SUCCESS } from '../actions';

export default (state = {}, action: any): any => {
  let newState = {};

  switch (action.type) {
    case GET_VOTES_BY_ELECTION_SUCCESS:
      newState = [...action.votes];
      break;
    default:
      newState = state;
  }

  return newState;
};
