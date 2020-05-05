/**
 * @public
 * @interface Result
 *
 * @property {string}    option  - Result's detail
 * @property {string}    vote    - Result's vote
 */
export interface Result {
  option: string;
  vote: string;
}

/**
 * @public
 * @interface Vote
 *
 * @property {string}          _id     - Unique ID
 * @property {Array<Result>}   results - Set of results
 */
export default interface Vote {
  _id: string;
  results: Array<Result>;
}
