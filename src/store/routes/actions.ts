import {RootRouterTypes} from '@typedef/store/routes.types';
import {UPDATE_ROOT_ROUTE} from './modules/actionTypes';

export const updateRootRoute = (payload: RootRouterTypes) => ({
  type: UPDATE_ROOT_ROUTE,
  payload,
});

export type CounterAction = ReturnType<typeof updateRootRoute>;
