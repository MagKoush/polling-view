import Election from './Election';
import User from './User';
import Vote from './Vote';

export default interface State {
  user: User;
  election: Election;
  votes: Array<Vote>;
  page: any;
}
