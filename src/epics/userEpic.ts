import { Cookies } from 'react-cookie';
import { ActionsObservable, ofType } from 'redux-observable';
import { concat, Observable, of } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { flatMap, map } from 'rxjs/operators';

import {
  AUTHENTICATE_USER,
  AUTHENTICATE_USER_SUCCESS,
  GET_USER,
  GET_USER_SUCCESS,
  LOG_OUT_USER,
  LOG_OUT_USER_SUCCESS,
} from '../actions';
import { Request } from '../Ajax';
import { SERVER_URL } from '../constants';
import { getView } from '../helpers';

const cookies = new Cookies('user');

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
      cookies.set('token', token, { path: '/' });

      return ajax(new Request(`${SERVER_URL}/users/me`));
    }),
    flatMap(({ response: { status } }: AjaxResponse) => {
      cookies.set('user', { status }, { path: '/' });

      const type = getView(status);

      return concat(of({ status, type: AUTHENTICATE_USER_SUCCESS }), of({ type }));
    }),
  );

/**
 * @public
 *
 * Log the user out.
 *
 * @param {ActionsObservable<any>} action$  - Observable to operate the logic and data
 * @returns {Observable<any>} an observable to an object to dispatch to
 */
export const logOutUserEpic = (action$: ActionsObservable<any>): Observable<any> =>
  action$.pipe(
    ofType(LOG_OUT_USER),
    flatMap(() => {
      cookies.remove('token', { path: '/' });
      cookies.remove('user', { path: '/' });

      return concat(of({ type: LOG_OUT_USER_SUCCESS }), of({ type: 'HOME' }));
    }),
  );
