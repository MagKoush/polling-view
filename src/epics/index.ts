import { combineEpics } from 'redux-observable';

import { getElectionByUserEpic } from './electionEpic';
import { authenticateUserEpic, getUserEpic, logOutUserEpic } from './userEpic';
import { getVotesByElectionEpic, postVotesEpic } from './voteEpic';

export default combineEpics(
  authenticateUserEpic,
  logOutUserEpic,
  getElectionByUserEpic,
  getUserEpic,
  getVotesByElectionEpic,
  postVotesEpic,
);
