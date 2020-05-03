import './main';
import 'dotenv-defaults/config';

import * as React from 'react';
import { Cookies, CookiesProvider } from 'react-cookie';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './configureStore';
import { State } from './interfaces';

const cookies = new Cookies('token');
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

const store = configureStore(preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById('root'),
);
