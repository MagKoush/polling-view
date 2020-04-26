import * as React from 'react';
import { connect } from 'react-redux';

import components from './components';

interface Props {
  page?: string;
}

export function App({ page = 'Home' }: Props): React.ReactElement {
  const Component = components[page];
  return <Component />;
}

const mapStateToProps = (props: Props): any => props;

export default connect(mapStateToProps)(App);
