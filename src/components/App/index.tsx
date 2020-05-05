import './styles';

import * as React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import components from '..';

/**
 * @private
 *
 * @interface AppPropertyTypes  App component's property types
 *
 * @property {string} page - page type to redirect to
 */
interface Props {
  page?: string;
}

/**
 * @public
 *
 * App Component
 *
 * @param {Props} props  - component's property to render the component with
 * @returns {React.ReactElement} an App React component
 */
export function App({ page = 'Home' }: Props): React.ReactElement {
  const Component = components[page];
  return (
    <div className="app">
      <Component />
      <Link to={{ type: 'HOME' }}>Home</Link>
    </div>
  );
}

const mapStateToProps = (props: Props): any => props;

export default connect(mapStateToProps)(App);
