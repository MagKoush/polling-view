import { USER_FETCH_POLLS_SUCCESS, USER_SET_EMAIL } from '../constants';

export default (state = {}, action: any): any => {
  let newState = {};

  switch (action.type) {
    case USER_FETCH_POLLS_SUCCESS:
      newState = {
        ...state,
        polls: action.polls,
      };
      break;
    case USER_SET_EMAIL:
      newState = {
        ...state,
        email: action.email,
      };
      break;
    default:
      newState = state;
  }

  console.log(newState);
  return newState;
};
