import { combineEpics } from 'redux-observable';

import { getElectionByUserEpic } from './electionEpic';
import { authenticateUserEpic, getUserEpic } from './userEpic';
import { getVotesByElectionEpic, postVotesEpic } from './voteEpic';

export default combineEpics(
  authenticateUserEpic,
  getElectionByUserEpic,
  getUserEpic,
  getVotesByElectionEpic,
  postVotesEpic,
);
