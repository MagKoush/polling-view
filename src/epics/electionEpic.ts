import { ActionsObservable, ofType } from 'redux-observable';
import { forkJoin, Observable, of } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { flatMap, map, mapTo } from 'rxjs/operators';

import {
  CREATE_ELECTION,
  GET_ELECTION_BY_USER,
  GET_ELECTION_BY_USER_SUCCESS,
  GET_ELECTION_PARTICIPANTS,
  GET_ELECTION_PARTICIPANTS_SUCCESS,
} from '../actions';
import { Request } from '../Ajax';
import { SERVER_URL } from '../constants';
import { Election, Poll, PollType } from '../interfaces';

/**
 * @public
 *
 * Fetches the election's details associated to a user to render the components.
 *
 * @param {ActionObservable} action$  - Observable to operate the logic and data
 * @returns {<Observable<any>} an observable to an object to dispatch to
 */
export const getElectionByUserEpic = (action$: ActionsObservable<any>): Observable<any> =>
  action$.pipe(
    ofType(GET_ELECTION_BY_USER),
    flatMap(() => ajax(new Request(`${SERVER_URL}/users/me`))),
    flatMap(
      ({
        response: {
          elections: [electionID],
        },
      }: any) => {
        const $election = ajax(new Request(`${SERVER_URL}/elections/${electionID}`));
        const $polls = ajax(new Request(`${SERVER_URL}/elections/${electionID}/polls`));

        return forkJoin($election, $polls);
      },
    ),
    map(([election, polls]: Array<AjaxResponse>) => ({
      election: {
        ...election.response,
        polls: polls.response,
      },
      type: GET_ELECTION_BY_USER_SUCCESS,
    })),
  );

/**
 * @public
 *
 * Fetches the election's participants.
 *
 * TODO: server should send the participants not the EPIC
 *
 * @param {ActionObservable} action$  - Observable to operate the logic and data
 * @returns {<Observable<any>} an observable to an object to dispatch to
 */
export const getElectionParticipants = (action$: ActionsObservable<any>): Observable<any> =>
  action$.pipe(
    ofType(GET_ELECTION_PARTICIPANTS),
    flatMap(({ id }: any) => {
      const $voters = ajax(new Request(`${SERVER_URL}/votes/elections/${id}/users`));
      const $users = ajax(new Request(`${SERVER_URL}/users/elections/${id}`));

      return forkJoin($voters, $users);
    }),
    flatMap(([voters, users]: Array<AjaxResponse>) => {
      const participants = users.response.map((user: any) => {
        const newUser = { ...user };
        if (voters.response.includes(user._id)) {
          newUser.hasVoted = true;
        } else {
          newUser.hasVoted = false;
        }

        return newUser;
      });

      return of({ participants, type: GET_ELECTION_PARTICIPANTS_SUCCESS });
    }),
  );

/**
 * @public
 *
 * Creates an election
 *
 * @param {ActionObservable} action$  - Observable to operate the logic and data
 * @returns {<Observable<any>} an observable to an object to dispatch to
 */
export const createElection = (action$: ActionsObservable<any>): Observable<any> =>
  action$.pipe(
    ofType(CREATE_ELECTION),
    flatMap(({ election: { title, start, end, polls } }: any) => {
      const polls$ = polls.map(({ text, options }: any) => {
        const polls = { options, text, type: PollType.SS } as Poll;

        return ajax(new Request(`${SERVER_URL}/polls`, polls, 'POST'));
      });

      return forkJoin([...polls$, of({ end, start, title })]);
    }),
    flatMap((data: Array<any>): any => {
      const { title, start, end } = data.pop();
      const polls = data.map(({ response: { _id } }: any) => _id);
      const election = { end, polls, start, title } as Election;

      return ajax(new Request(`${SERVER_URL}/elections`, election, 'POST'));
    }),
    mapTo({ type: 'ADMIN' }),
  );
