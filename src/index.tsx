import './main';
import 'dotenv-defaults/config';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './configureStore';
import { State } from './interfaces';

const preloadedState: State = {
  election: {
    polls: [
      {
        _id: '',
        options: [],
        text: '',
      },
    ],
    title: '',
  },
  page: {},
  user: {
    email: '',
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

const store = configureStore(preloadedState);

ReactDOM.render(<Provider store={store}>{<App />}</Provider>, document.getElementById('root'));
