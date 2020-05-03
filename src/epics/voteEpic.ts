import { ofType } from 'redux-observable';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { flatMap, map, mapTo } from 'rxjs/operators';

import { GET_VOTES_BY_ELECTION, GET_VOTES_BY_ELECTION_SUCCESS, POST_VOTES } from '../actions';
import { Request } from '../Ajax';
import { SERVER_URL } from '../constants';

export const getVotesByElectionEpic = (action$: any): any =>
  action$.pipe(
    ofType(GET_VOTES_BY_ELECTION),
    flatMap(({ electionID }: any) => ajax(new Request(`${SERVER_URL}/votes/elections/${electionID}`))),
    map(({ response }: AjaxResponse) => ({ type: GET_VOTES_BY_ELECTION_SUCCESS, votes: response })),
  );

export const postVotesEpic = (action$: any): any =>
  action$.pipe(
    ofType(POST_VOTES),
    flatMap(({ electionID, questions }: any) => {
      const polls: Array<any> = [];

      for (const key of Object.keys(questions)) polls.push({ _id: key, results: questions[key] });

      return ajax(new Request(`${SERVER_URL}/votes`, { electionID, polls }, 'POST'));
    }),
    mapTo({ type: 'RESULTS' }),
  );
