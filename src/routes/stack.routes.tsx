import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home';

export function StackRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen name='Home' component={Home} />
    </Navigator>
  )
}