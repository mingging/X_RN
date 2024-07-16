import {RootRouterTypes} from '@typedef/store/routes.types';

import {CounterAction} from './actions';
import {UPDATE_ROOT_ROUTE} from './modules/actionTypes';

type CounterState = {
  root: RootRouterTypes;
};
const initialState: CounterState = {
  root: 'splash',
};
const routes = (
  state: CounterState = initialState,
  {type, payload}: CounterAction,
): CounterState => {
  switch (type) {
    case UPDATE_ROOT_ROUTE:
      return {
        ...state,
        root: payload as RootRouterTypes,
      };
    default:
      return state;
  }
};
export default routes;
