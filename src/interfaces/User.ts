export enum StatusType {
  Admin = 'admin',
  Runner = 'runner',
  Voter = 'voter',
}

/**
 * @public
 * @interface User
 *
 * @property {boolean}   isAuthenticated  - Is user authenticated
 * @property {string}    email            - User's email
 */
export default interface User {
  isAuthenticated: boolean;
  status: StatusType;
  email: string;
}
