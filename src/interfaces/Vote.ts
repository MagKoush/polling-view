export interface Result {
  option: string;
  vote: string;
}

export default interface Vote {
  _id: string;
  results: Array<Result>;
}
