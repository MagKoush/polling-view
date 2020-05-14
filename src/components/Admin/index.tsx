import './styles';

import * as React from 'react';
import { connect } from 'react-redux';

import { logOutUser } from '../../actions';

/**
 * @private
 *
 * @interface AdminPropertyTypes  Admin component's property types
 *
 * @property {Function}    logout            - Log User out
 */
interface Props {
  logout: () => {};
}

/**
 * @public
 *
 * Admin Component
 *
 * @param {Props} props  - component's property to render the component with
 * @returns {React.ReactElement} an App React component
 */
export function Admin({ logout }: Props): React.ReactElement {
  return (
    <div className="admin">
      <h1>Admin</h1>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}

const mapDispatch = {
  logout: logOutUser,
};
const mapStateToProps = (props: Props): any => props;

export default connect(mapStateToProps, mapDispatch)(Admin);
