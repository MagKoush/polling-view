import { Components } from '../routesMap';

/**
 * Page reducer to render the targeted component
 *
 * @param {any} state   - Previous state from a dispatch
 * @param {any} action  - Action object to dispatch from an epic
 * @returns {any} new state to render the components with
 */
export default (state = 'HOME', action: { type: string }): any => Components[action.type] || state;
