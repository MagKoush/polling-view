/**
 * @public
 * @enum StatusType
 *
 * User's possible statuses
 */
export enum StatusType {
  Admin = 'admin',
  Runner = 'runner',
  Voter = 'voter',
}

/**
 * @public
 * @interface User
 *
 * @property {boolean}    isAuthenticated  - Is user authenticated
 * @property {StatusType} status           - User's status
 * @property {string}     email            - User's email
 */
export default interface User {
  isAuthenticated: boolean;
  status: StatusType;
  email: string;
}
