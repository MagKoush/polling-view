import { Components } from '../routesMap';

export default (state = 'HOME', action: { type: string }): any => Components[action.type] || state;
