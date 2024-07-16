import useRootRouter from '@hooks/store/routes/useRootRouter';
import RootNavigation from '@routes/RootNavigation';
import React from 'react';

const RootNavigationContainer = () => {
  const {rootRouter} = useRootRouter();

  return <RootNavigation rootRouter={rootRouter} />;
};

export default RootNavigationContainer;
