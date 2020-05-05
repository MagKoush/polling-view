import { Cookies } from 'react-cookie';
import { ActionsObservable, ofType } from 'redux-observable';
import { concat, Observable, of } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { flatMap, map } from 'rxjs/operators';

import { AUTHENTICATE_USER, AUTHENTICATE_USER_SUCCESS, GET_USER, GET_USER_SUCCESS } from '../actions';
import { Request } from '../Ajax';
import { SERVER_URL } from '../constants';

/**
 * @public
 *
 * Fetches the user's to render the components.
 *
 * @param {ActionsObservable<any>} action$  - Observable to operate the logic and data
 * @returns {<Observable<any>} an observable to an object to dispatch to
 */
export const getUserEpic = (action$: ActionsObservable<any>): Observable<any> =>
  action$.pipe(
    ofType(GET_USER),
    flatMap(({ userID }: any) => ajax(new Request(`${SERVER_URL}/users/${userID}`))),
    map(({ response }: AjaxResponse) => ({ type: GET_USER_SUCCESS, votes: response })),
  );

/**
 * @public
 *
 * Authenticate the user after a login process.
 *
 * @param {ActionsObservable<any>} action$  - Observable to operate the logic and data
 * @returns {Observable<any>} an observable to an object to dispatch to
 */
export const authenticateUserEpic = (action$: ActionsObservable<any>): Observable<any> =>
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
