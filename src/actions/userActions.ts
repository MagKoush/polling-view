export const GET_USER_BY_EMAIL = 'GET_USER_BY_EMAIL';
export const GET_USER_BY_EMAIL_SUCCESS = 'GET_USER_BY_EMAIL_SUCCESS';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const getUserByEmail = (email: string): any => ({ email, type: GET_USER_BY_EMAIL });
export const getUser = (userID: string): any => ({ type: GET_USER, userID });
