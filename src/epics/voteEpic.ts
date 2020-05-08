import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { flatMap, map, mapTo } from 'rxjs/operators';

import { GET_VOTES_BY_ELECTION, GET_VOTES_BY_ELECTION_SUCCESS, POST_VOTES } from '../actions';
import { Request } from '../Ajax';
import { SERVER_URL } from '../constants';

/**
 * @public
 *
 * Fetches the set of votes details associated to an election to render the components.
 *
 * @param {ActionsObservable<any>} action$  - Observable to operate the logic and data
 * @returns {Observable<any>} an observable to an object to dispatch to
 */
export const getVotesByElectionEpic = (action$: ActionsObservable<any>): Observable<any> =>
  action$.pipe(
    ofType(GET_VOTES_BY_ELECTION),
    flatMap(({ electionID }: any) => ajax(new Request(`${SERVER_URL}/votes/elections/${electionID}`))),
    map(({ response }: AjaxResponse) => ({ type: GET_VOTES_BY_ELECTION_SUCCESS, votes: response })),
  );

/**
 * @public
 *
 * Submits the set of votes details and redirect the page to the result page.
 *
 * @param {ActionsObservable<any>} action$  - Observable to operate the logic and data
 * @returns {Observable<any>} an observable to an object to dispatch to
 */
export const postVotesEpic = (action$: ActionsObservable<any>): Observable<any> =>
  action$.pipe(
    ofType(POST_VOTES),
    flatMap(({ electionID, questions }: any) => {
      const polls: Array<any> = [];

      for (const key of Object.keys(questions)) polls.push({ _id: key, results: questions[key] });

      return ajax(new Request(`${SERVER_URL}/votes`, { electionID, polls }, 'POST'));
    }),
    mapTo({ type: 'THANK_YOU' }),
  );
