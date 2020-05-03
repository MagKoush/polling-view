export const POST_VOTES = 'POST_VOTES';
export const POST_VOTES_SUCCESS = 'POST_VOTES_SUCCESS';

export const GET_VOTES_BY_ELECTION = 'GET_VOTES_BY_ELECTION';
export const GET_VOTES_BY_ELECTION_SUCCESS = 'GET_VOTES_BY_ELECTION_SUCCESS';

export const getVotesByElection = (electionID: string): any => ({ electionID, type: GET_VOTES_BY_ELECTION });
export const postVotes = (electionID: string, questions: Array<any>): any => ({
  electionID,
  questions,
  type: POST_VOTES,
});
