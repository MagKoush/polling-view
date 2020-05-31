import { NOT_FOUND } from 'redux-first-router';

export const Components = {
  ADMIN: 'Admin',
  CREATE_ELECTION_PAGE: 'CreateElection',
  ELECTION: 'Election',
  HOME: 'Home',
  [NOT_FOUND]: 'NotFound',
  RESULTS: 'Results',
  SIGN_IN: 'SignIn',
  THANK_YOU: 'ThankYou',
};

export default {
  ADMIN: '/admin',
  CREATE_ELECTION_PAGE: '/election/create',
  ELECTION: '/election',
  HOME: '/',
  RESULTS: '/results',
  SIGN_IN: '/signin',
  THANK_YOU: '/thankyou',
};
