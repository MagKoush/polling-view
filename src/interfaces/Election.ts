/**
 * @public
 * @enum PollType
 *
 * @property {string} MS - multiple selection poll type
 * @property {string} SS - single selection poll type
 */
export enum PollType {
  MS = 'multipleSelection',
  SS = 'singleSelection',
}

/**
 * @public
 * @interface Poll
 *
 * @property {string} _id            - Unique ID
 * @property {string} text           - Text
 * @property {PollType} type         - poll type
 * @property {Array<string>} options - Offered options
 */
export interface Poll {
  _id: string;
  text: string;
  type: PollType;
  options: Array<string>;
}

/**
 * @public
 * @interface Election
 *
 * @property {string}      _id            - Unique ID
 * @property {string}      title          - Election title
 * @property {Date}        start          - Election start Date
 * @property {Date}        end            - Election end Date
 * @property {Array<Poll>} text           - Set of polls added to the election
 * @property {Array<any>}  participants   - Set of participants associated to the election
 */
export default interface Election {
  _id: string;
  title: string;
  start: Date;
  end: Date;
  polls: Array<Poll>;
  participants: Array<any>;
}
