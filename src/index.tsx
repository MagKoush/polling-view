import './main';
import 'dotenv-defaults/config';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './configureStore';
import { State } from './interfaces';

const preloadedState: State = {
  user: {
    email: 'arash.koush@gmail.com',
    polls: [],
  },
};

const store = configureStore(preloadedState);

ReactDOM.render(<Provider store={store}>{<App />}</Provider>, document.getElementById('root'));
