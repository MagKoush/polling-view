export enum PollType {
  MS = 'multipleSelection',
  SS = 'singleSelection',
}

export interface Poll {
  _id: string;
  text: string;
  options: Array<string>;
}

export default interface Election {
  title: string;
  polls: Array<Poll>;
}
