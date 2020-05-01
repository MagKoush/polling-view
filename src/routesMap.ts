import { NOT_FOUND } from 'redux-first-router';

export const Components = {
  ELECTION: 'Election',
  HOME: 'Home',
  [NOT_FOUND]: 'NotFound',
  RESULTS: 'Results',
  SIGN_IN: 'SignIn',
  SIGN_UP: 'SignUp',
};

export default {
  ELECTION: '/election',
  HOME: '/',
  RESULTS: '/results',
  SIGN_IN: '/signin',
  SIGN_UP: '/singup',
};
