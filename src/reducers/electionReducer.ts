import { GET_ELECTION_BY_USER_SUCCESS } from '../actions';

export default (state = {}, action: any): any => {
  let newState = {};
  switch (action.type) {
    case GET_ELECTION_BY_USER_SUCCESS:
      newState = {
        ...state,
        ...action.election,
      };
      break;
    default:
      newState = state;
  }

  return newState;
};
