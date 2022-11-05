import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export enum HomeStackScreens {
  RoutineListScreen = 'RoutineListScreen',
  RoutineTabNavigaton = 'RoutineTabNavigator',
}

export type HomeStackScreenParams = {
  [HomeStackScreens.RoutineListScreen]: undefined;
  [HomeStackScreens.RoutineTabNavigaton]: NavigatorScreenParams<RoutineTabScreenParams>;
};

export type HomeStackScreenProps<
  RouteName extends keyof HomeStackScreenParams = HomeStackScreens
> = StackScreenProps<HomeStackScreenParams, RouteName>;

export type HomeStackNavigationProps<
  RouteName extends keyof HomeStackScreenParams = HomeStackScreens
> = StackNavigationProp<HomeStackScreenParams, RouteName>;

export type HomeStackRouteProps<
  RouteName extends keyof HomeStackScreenParams = HomeStackScreens
> = RouteProp<HomeStackScreenParams, RouteName>;

export enum RoutineTabScreens {
  SelectedRoutineStack = 'SelectedRoutineStack',
  History = 'History',
  Stats = 'Stats',
}

export type RoutineTabScreenParams = {
  [RoutineTabScreens.SelectedRoutineStack]: NavigatorScreenParams<SelectedRoutineStackScreenParams>;
  [RoutineTabScreens.History]: undefined;
  [RoutineTabScreens.Stats]: undefined;
};

export type RoutineTabScreenProps<
  RouteName extends keyof RoutineTabScreenParams = RoutineTabScreens
> = BottomTabScreenProps<RoutineTabScreenParams, RouteName>;

export type RoutineTabNavigationProps<
  RouteName extends keyof RoutineTabScreenParams = RoutineTabScreens
> = BottomTabNavigationProp<RoutineTabScreenParams, RouteName>;

export type RoutineTabRouteProps<
  RouteName extends keyof RoutineTabScreenParams = RoutineTabScreens
> = RouteProp<RoutineTabScreenParams, RouteName>;

export enum SelectedRoutineStackScreens {
  SelectedRoutineScreen = 'SelectedRoutineScreen',
  WorkoutScreen = 'WorkoutScreen',
  SelectedWorkout = 'SelectedWorkout',
}

export type SelectedRoutineStackScreenParams = {
  [SelectedRoutineStackScreens.SelectedRoutineScreen]: {
    edit: boolean;
    id?: string;
  };
  [SelectedRoutineStackScreens.WorkoutScreen]: undefined;

  [SelectedRoutineStackScreens.SelectedWorkout]: undefined;
};

export type SelectedRoutineStackScreenProps<
  RouteName extends keyof SelectedRoutineStackScreenParams = SelectedRoutineStackScreens
> = StackScreenProps<SelectedRoutineStackScreenParams, RouteName>;

export type SelectedRoutineStackNavigationProps<
  RouteName extends keyof SelectedRoutineStackScreenParams = SelectedRoutineStackScreens
> = StackNavigationProp<SelectedRoutineStackScreenParams, RouteName>;

export type SelectedRoutineStackRouteProps<
  RouteName extends keyof SelectedRoutineStackScreenParams = SelectedRoutineStackScreens
> = RouteProp<SelectedRoutineStackScreenParams, RouteName>;
