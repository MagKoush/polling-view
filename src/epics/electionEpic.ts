import { ofType } from 'redux-observable';
import { forkJoin } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { flatMap, map } from 'rxjs/operators';

import { GET_ELECTION_BY_USER, GET_ELECTION_BY_USER_SUCCESS } from '../actions';
import { SERVER_URL } from '../constants';

export const getElectionByUserEpic = (action$: any): any =>
  action$.pipe(
    ofType(GET_ELECTION_BY_USER),
    flatMap(({ userID }: any) => ajax(`${SERVER_URL}/users/${userID}`)),
    flatMap(({ response }: any) => {
      const electionID = response.elections[0];
      const $election = ajax(`${SERVER_URL}/elections/${electionID}`);
      const $polls = ajax(`${SERVER_URL}/elections/${electionID}/polls`);

      return forkJoin($election, $polls);
    }),
    map(([election, polls]: Array<AjaxResponse>) => ({
      election: {
        ...election.response,
        polls: polls.response,
      },
      type: GET_ELECTION_BY_USER_SUCCESS,
    })),
  );
