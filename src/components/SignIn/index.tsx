import React from 'react';
import { connect } from 'react-redux';

export function SignIn(): React.ReactElement {
  return <h1>Sign In</h1>;
}

export default connect()(SignIn);
