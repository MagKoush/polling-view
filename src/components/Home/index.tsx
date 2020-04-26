import React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

export function Home(): React.ReactElement {
  return (
    <div>
      <h1>Hello</h1>
      <Link to={{ type: 'SIGN_IN' }}>Sign In!</Link>
      <Link to={{ type: 'SIGN_UP' }}>Sign Up!</Link>
    </div>
  );
}

export default connect()(Home);
