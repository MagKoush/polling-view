import './styles';

import React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import { User } from '../../interfaces';

interface Props {
  user: User;
}

export function Home(props: Props): React.ReactElement {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to={{ type: props.user.isAuthenticated ? 'ELECTION' : 'SIGN_IN' }}>Sign In!</Link>
    </div>
  );
}
const mapProps = (props: any): any => props;
export default connect(mapProps)(Home);
