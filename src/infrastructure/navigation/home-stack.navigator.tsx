import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RoutinesListScreen } from '../../features/routine/screens/routines-list.screen';
import { RoutineTabNavigator } from './routine-tab.navigator';
import { HomeStackScreens } from './types';

const HomeStack = createStackNavigator();

export const HomeStackNavigation = () => {
  const { Navigator, Screen } = HomeStack;
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name={HomeStackScreens.RoutineListScreen}
        component={RoutinesListScreen}
      />
      <Screen
        name={HomeStackScreens.RoutineTabNavigaton}
        component={RoutineTabNavigator}
      />
    </Navigator>
  );
};
