import Election from './Election';
import User from './User';
import Vote from './Vote';

/**
 * @public
 * @interface State
 *
 * @property {User}        user     - User details
 * @property {Election}    election - Election details
 * @property {Array<Vote>} votes    - Set of Votes details
 * @property {any}         page     - Current page name associated to the URL
 */
export default interface State {
  user: User;
  election: Election;
  votes: Array<Vote>;
  page: any;
}
