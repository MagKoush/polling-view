// Election Action Types
export const GET_ELECTION = 'GET_ELECTION';
export const GET_ELECTION_SUCCESS = 'GET_ELECTION_SUCCESS';

export const GET_ELECTION_BY_USER = 'GET_ELECTION_BY_USER';
export const GET_ELECTION_BY_USER_SUCCESS = 'GET_ELECTION_BY_USER_SUCCESS';

export const GET_ELECTION_PARTICIPANTS = 'GET_ELECTION_PARTICIPANTS';
export const GET_ELECTION_PARTICIPANTS_SUCCESS = 'GET_ELECTION_PARTICIPANTS_SUCCESS';

export const getElectionByUser = (): any => ({ type: GET_ELECTION_BY_USER });
export const getElectionParticipants = (id: string): any => ({ id, type: GET_ELECTION_PARTICIPANTS });
