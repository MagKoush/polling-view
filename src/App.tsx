import * as React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import components from './components';

interface Props {
  page?: string;
}

export function App({ page = 'Home' }: Props): React.ReactElement {
  const Component = components[page];
  return (
    <div>
      <Component />
      <Link to={{ type: 'HOME' }}>Home</Link>
    </div>
  );
}

const mapStateToProps = (props: Props): any => props;

export default connect(mapStateToProps)(App);
