import { GET_USER_BY_EMAIL_SUCCESS, GET_USER_SUCCESS } from '../actions';

export default (state = {}, action: any): any => {
  let newState = {};

  switch (action.type) {
    case GET_USER_BY_EMAIL_SUCCESS:
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
