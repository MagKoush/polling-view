import { USER_FETCH_POLLS, USER_FETCH_POLLS_SUCCESS, USER_SET_EMAIL } from '../constants';

export const setEmail = (email: string): any => ({ email, type: USER_SET_EMAIL });
export const fetchPolls = (email: string): any => ({ email, type: USER_FETCH_POLLS });
export const fetchPollsSuccess = (polls: Array<any>): any => ({ polls, type: USER_FETCH_POLLS_SUCCESS });
