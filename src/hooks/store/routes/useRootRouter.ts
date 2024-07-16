import {updateRootRoute} from '@store/routes/actions';
import {RootRouterTypes} from '@typedef/store/routes.types';
import {RootState} from '@typedef/store/store.types';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
function useRootRouter() {
  const dispatch = useDispatch();
  const rootRouter = useSelector((state: RootState) => state.routes.root);

  const __updateRootRouterFromHooks = useCallback(
    (diff: RootRouterTypes) => dispatch(updateRootRoute(diff)),
    [dispatch],
  );

  return {
    rootRouter,
    __updateRootRouterFromHooks,
  };
}

export default useRootRouter;
