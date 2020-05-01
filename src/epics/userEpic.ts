import { ofType } from 'redux-observable';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { flatMap, map } from 'rxjs/operators';

import { GET_USER, GET_USER_BY_EMAIL, GET_USER_BY_EMAIL_SUCCESS, GET_USER_SUCCESS } from '../actions';
import { SERVER_URL } from '../constants';

export const getUserEpic = (action$: any): any =>
  action$.pipe(
    ofType(GET_USER),
    flatMap(({ userID }: any) => ajax(`${SERVER_URL}/users/${userID}`)),
    map(({ response }: AjaxResponse) => ({ type: GET_USER_SUCCESS, votes: response })),
  );

export const getUserEpicByEmail = (action$: any): any =>
  action$.pipe(
    ofType(GET_USER_BY_EMAIL),
    flatMap(({ email }: any) => ajax(`${SERVER_URL}/users/emails/${email}`)),
    map(({ response }: AjaxResponse) => ({ type: GET_USER_BY_EMAIL_SUCCESS, votes: response })),
  );
