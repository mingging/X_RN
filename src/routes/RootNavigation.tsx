import {RootRouterTypes} from '@typedef/store/routes.types';
import React from 'react';
import {View} from 'react-native';
import CommonStackNavigationContainer from './containers/CommonStackNavigationContainer';

interface Props {
  rootRouter: RootRouterTypes;
}

const RootNavigation = ({rootRouter}: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <CommonStackNavigationContainer />
    </View>
  );
};

export default RootNavigation;
