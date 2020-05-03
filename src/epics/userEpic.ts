import { Cookies } from 'react-cookie';
import { ofType } from 'redux-observable';
import { concat, of } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { flatMap, map } from 'rxjs/operators';

import { AUTHENTICATE_USER, AUTHENTICATE_USER_SUCCESS, GET_USER, GET_USER_SUCCESS } from '../actions';
import { Request } from '../Ajax';
import { SERVER_URL } from '../constants';

export const getUserEpic = (action$: any): any =>
  action$.pipe(
    ofType(GET_USER),
    flatMap(({ userID }: any) => ajax(new Request(`${SERVER_URL}/users/${userID}`))),
    map(({ response }: AjaxResponse) => ({ type: GET_USER_SUCCESS, votes: response })),
  );

export const authenticateUserEpic = (action$: any): any =>
  action$.pipe(
    ofType(AUTHENTICATE_USER),
    flatMap(({ username, password }: any) =>
      ajax(new Request(`${SERVER_URL}/auth/login`, { password, username }, 'POST')),
    ),
    flatMap(({ response: { token } }: AjaxResponse) => {
      const cookies = new Cookies('token');
      cookies.set('token', token);

      return concat(of({ type: AUTHENTICATE_USER_SUCCESS }), of({ type: 'ELECTION' }));
    }),
  );
