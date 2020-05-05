import React from 'react';
import { connect } from 'react-redux';

/**
 * @public
 *
 * NotFound Component
 *
 * @param {Props} props  - component's property to render the component with
 * @returns {React.ReactElement} an NotFound React component
 */
export function NotFound(): React.ReactElement {
  return <h1>404!</h1>;
}

export default connect()(NotFound);
