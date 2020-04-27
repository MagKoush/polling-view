import './styles';

import React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

export function Home(): React.ReactElement {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to={{ type: 'SIGN_IN' }}>Sign In!</Link>
    </div>
  );
}

export default connect()(Home);
