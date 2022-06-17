import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RoutineListScreen } from "../../features/routine-list/screens/routine-list.screen";
import { RoutineScreen } from "../../features/routine/screens/routine.screen";


const RoutinesStack = createStackNavigator();

export const RoutinesNavigator = () => {
  return (
      <RoutinesStack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}
      >
        <RoutinesStack.Screen
          name="routine-list"
          component={RoutineListScreen}
        />
        <RoutinesStack.Screen name="routine" component={RoutineScreen} />
      </RoutinesStack.Navigator>
  
  );
};
