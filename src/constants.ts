import { Cookies } from 'react-cookie';

import { PollType, State } from './interfaces';

const cookies = new Cookies('token');
export const SERVER_URL = process.env.SERVER_URL;

export const INITIAL_STATE: State = {
  election: {
    _id: '',
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
  page: {},
  user: {
    email: '',
    isAuthenticated: cookies.get('token') ? true : false,
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
