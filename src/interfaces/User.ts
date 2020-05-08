/**
 * @public
 * @interface User
 *
 * @property {boolean}   isAuthenticated  - Is user authenticated
 * @property {string}    email            - User's email
 */
export default interface User {
  isAuthenticated: boolean;
  isRunner: boolean;
  email: string;
}
