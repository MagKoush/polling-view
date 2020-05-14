import { Cookies } from 'react-cookie';

import { PollType, State } from './interfaces';

const cookies = new Cookies('token');
export const SERVER_URL = process.env.SERVER_URL;

export const INITIAL_STATE: State = {
  election: {
    _id: '',
    participants: [],
    polls: [
      {
        _id: '',
        options: [],
        text: '',
        type: PollType.MS,
      },
    ],
    title: '',
  },
  page: '',
  user: {
    email: '',
    isAuthenticated: cookies.get('token') ? true : false,
    status: cookies.get('user') ? cookies.get('user').status : undefined,
  },
  votes: [
    {
      _id: '',
      results: [
        {
          option: '',
          vote: '',
        },
      ],
    },
  ],
};
