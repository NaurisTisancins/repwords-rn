import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RoutineFormContextProvider } from "../../services/routine-form.service/routine-form.context";

import {
  CreateRoutineScreen,
  RoutinePlanScreen,
  SessionPlanFirstScreen,
  SessionPlanSecondScreen,
  AddExercisesScreen,
} from "../../features/routine-form/screens/exports";

const RoutineFormStack = createStackNavigator();

export const RoutineFormNavigator = () => {
  return (
    <RoutineFormContextProvider>
      <RoutineFormStack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}
      >
        <RoutineFormStack.Screen
          name="create-routine"
          component={CreateRoutineScreen}
        />
        <RoutineFormStack.Screen
          name="routine-plan"
          component={RoutinePlanScreen}
        />
        <RoutineFormStack.Screen
          name="session-plan-first"
          component={SessionPlanFirstScreen}
        />
        <RoutineFormStack.Screen
          name="session-plan-second"
          component={SessionPlanSecondScreen}
        />
        <RoutineFormStack.Screen
          name="add-exercises"
          component={AddExercisesScreen}
        />
      </RoutineFormStack.Navigator>
    </RoutineFormContextProvider>
  );
};
