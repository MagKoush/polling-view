import { StatusType } from '../interfaces';

/**
 * Returns view according to given status
 *
 * @param {StatusType}  status  - User's status
 * @returns {string} view
 */
export function getView(status: StatusType): string {
  let view = 'ELECTION';

  switch (status) {
    case StatusType.Admin:
      view = 'ADMIN';
      break;
    case StatusType.Runner:
      view = 'RESULTS';
      break;
    case StatusType.Voter:
      view = 'ELECTION';
      break;
  }
  return view;
}
