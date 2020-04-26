import './styles';

import React from 'react';
import { connect } from 'react-redux';

export function SignIn(): React.ReactElement {
  return (
    <div className="signin">
      <h1>Login</h1>
      <form className="form">
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default connect()(SignIn);
