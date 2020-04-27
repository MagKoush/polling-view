import * as React from 'react';
import { connect } from 'react-redux';

export function SignUp(): React.ReactElement {
  return <h1>Sign Up</h1>;
}

const mapState = (props: any): any => props;

export default connect(mapState)(SignUp);
