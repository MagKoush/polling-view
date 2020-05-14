import './styles';

import React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import { getView } from '../../helpers';
import { User } from '../../interfaces';

/**
 * @private
 *
 * @interface HomePropertyTypes  Home component's property types
 *
 * @property {User} user - User's details
 */
interface Props {
  user: User;
}

/**
 * @public
 *
 * Home Component
 *
 * @param {Props} props  - component's property to render the component with
 * @returns {React.ReactElement} an Home React component
 */
export function Home({ user: { isAuthenticated, status } }: Props): React.ReactElement {
  const whichPage = getView(status);
  const type = isAuthenticated ? whichPage : 'SIGN_IN';

  return (
    <div className="home">
      <h1>Home</h1>
      <Link to={{ type }}>Sign In!</Link>
    </div>
  );
}

const mapProps = (props: any): any => props;

export default connect(mapProps)(Home);
