import { ajax } from 'rxjs/ajax';
import { filter, flatMap, map } from 'rxjs/operators';

import { fetchPollsSuccess } from '../actions';
import { SERVER_URL, USER_FETCH_POLLS } from '../constants';

// export const pingEpic = (action$: any): any =>
//   action$.pipe(
//     filter((action: any) => action.type === 'PING'),
//     delay(1000), // Asynchronously wait 1000ms then continue
//     mapTo({ type: 'PONG' }),
//   );

export const fetchElection = (action$: any): any =>
  action$.pipe(
    filter((action: any) => action.type === USER_FETCH_POLLS),
    flatMap((action: any) => ajax(`${SERVER_URL}/users/emails/${action.email}`)),
    flatMap(({ response }: any) => ajax(`${SERVER_URL}/elections/${response[0].elections[0]}/polls`)),
    map(({ response }: any) => fetchPollsSuccess(response)),
  );
