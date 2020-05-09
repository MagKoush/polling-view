import './styles';

import React from 'react';
import { connect } from 'react-redux';

import { logOutUser } from '../../actions';
/**
 * @private
 *
 * @interface SignInPropertyTypes  ThankYou component's property types
 *
 */
interface Props {
  logout: () => {};
}

/**
 * @public
 *
 * SignIn Component
 *
 * @param {Props} props  - component's property to render the component with
 * @returns {React.ReactElement} an SignIn React component
 */
export function ThanYou({ logout }: Props): React.ReactElement {
  return (
    <div className="thankyou">
      <h1>Thank you!</h1>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}

const mapDispatch = {
  logout: logOutUser,
};

const mapState = (props: any): any => props;

export default connect(mapState, mapDispatch)(ThanYou);
