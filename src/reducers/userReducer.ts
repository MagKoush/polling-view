import { AUTHENTICATE_USER_SUCCESS, GET_USER_SUCCESS } from '../actions';

export default (state = {}, action: any): any => {
  let newState = {};

  switch (action.type) {
    case AUTHENTICATE_USER_SUCCESS:
      newState = {
        ...state,
        isAuthenticated: true,
      };
      break;
    case GET_USER_SUCCESS:
      newState = {
        ...action.user,
      };
      break;
    default:
      newState = state;
  }

  return newState;
};
