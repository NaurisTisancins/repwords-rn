import React from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SelectedRoutineStackNavigation } from './selected-routine-stack.navigator';
import { RoutineTabScreens } from './types';

const RoutineTab = createBottomTabNavigator();

export const Stats = () => {
  return <Text>Hello from Stats</Text>;
};
export const History = () => {
  return <Text>Hello from History</Text>;
};

enum TAB_ICONS {
  Routines = 'md-list',
  Create = 'create-outline',
  Sessions = 'folder-open',
  // Settings = 'md-settings',
}

export const RoutineTabNavigator = () => {
  const { Navigator, Screen } = RoutineTab;
  return (
    <Navigator
      // initialRouteName='RoutineNavigator'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: TAB_ICONS = TAB_ICONS.Routines;

          if (route.name === RoutineTabScreens.SelectedRoutineStack) {
            iconName = TAB_ICONS.Routines;
          } else if (route.name === RoutineTabScreens.Stats) {
            iconName = TAB_ICONS.Create;
          } else if (route.name === RoutineTabScreens.History) {
            iconName = TAB_ICONS.Sessions;
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Screen
        name={RoutineTabScreens.SelectedRoutineStack}
        component={SelectedRoutineStackNavigation}
      />
      <Screen name={RoutineTabScreens.History} component={History} />
      <Screen name={RoutineTabScreens.Stats} component={Stats} />
      {/* other potential stacdks */}
    </Navigator>
  );
};
