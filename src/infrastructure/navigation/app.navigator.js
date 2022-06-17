import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RoutineFormNavigator } from "./routine-form.navigator";
import { RoutinesNavigator } from "./routines.navigator";

import { RoutinesContextProvider } from "../../services/routine.service/routines.context";

const Tab = createBottomTabNavigator();

export const Settings = () => {
  return <Text>Hello from Settings</Text>;
};

export const Sessions = () => {
  return <Text>Hello from Sessions</Text>;
};

const TAB_ICON = {
  Routines: "md-list",
  Create: "create-outline",
  Sessions: "folder-open",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => {
      return <Ionicons size={24} name={iconName} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarStyle: [
      {
        display: "flex",
      },
      null,
    ],
    headerShown: false,
  };
};

export const AppNavigator = () => {
  return (
    <RoutinesContextProvider>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Routines" component={RoutinesNavigator} />
        <Tab.Screen name="Create" component={RoutineFormNavigator} />
        <Tab.Screen name="Sessions" component={Sessions} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </RoutinesContextProvider>
  );
};
