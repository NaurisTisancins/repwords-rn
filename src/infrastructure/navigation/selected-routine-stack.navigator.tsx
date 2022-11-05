import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SelectedWorkoutScreen } from '../../features/routine/screens/selected-workout.screen';
import { SelectedRoutineScreen } from '../../features/routine/screens/selected-routine.screen';
import { WorkoutScreen } from '../../features/workout/screens/workout.screen';
import { SelectedRoutineStackScreens } from './types';

const SelectedRoutineStack = createStackNavigator();

export const SelectedRoutineStackNavigation = () => {
  const { Navigator, Screen } = SelectedRoutineStack;
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name={SelectedRoutineStackScreens.SelectedRoutineScreen}
        component={SelectedRoutineScreen}
        // initialParams={{ edit: false, id: '' }}
      />
      <Screen
        name={SelectedRoutineStackScreens.WorkoutScreen}
        component={WorkoutScreen}
      />
      <Screen
        name={SelectedRoutineStackScreens.SelectedWorkout}
        component={SelectedWorkoutScreen}
      />
    </Navigator>
  );
};
