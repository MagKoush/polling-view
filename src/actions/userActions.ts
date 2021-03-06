export const GET_USER_BY_EMAIL = 'GET_USER_BY_EMAIL';
export const GET_USER_BY_EMAIL_SUCCESS = 'GET_USER_BY_EMAIL_SUCCESS';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';

export const LOG_OUT_USER = 'LOG_OUT_USER';
export const LOG_OUT_USER_SUCCESS = 'LOG_OUT_USER_SUCCESS';

export const getUser = (userID: string): any => ({ type: GET_USER, userID });
export const authenticateUser = (username: string, password: string): any => ({
  password,
  type: AUTHENTICATE_USER,
  username,
});
export const logOutUser = (): any => ({ type: LOG_OUT_USER });
