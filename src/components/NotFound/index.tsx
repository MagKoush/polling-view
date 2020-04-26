import React from 'react';
import { connect } from 'react-redux';

export function NotFound(): React.ReactElement {
  return <h1>404!</h1>;
}

export default connect()(NotFound);
