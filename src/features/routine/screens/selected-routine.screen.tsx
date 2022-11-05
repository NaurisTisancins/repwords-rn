import React, { FC, useContext } from 'react';
import { AppContainer } from '../../../components/safe-area/app-container.component';
import { NavigationBar } from '../../../components/navigation-bar/navigation-bar.component';
import { WorkoutList } from '../components/workout-list.component';
import { RoutinesContext } from '../../../services/routines.service/routines.context';
import {
  HomeStackNavigationProps,
  HomeStackRouteProps,
  HomeStackScreens,
  RoutineTabScreens,
  SelectedRoutineStackNavigationProps,
  SelectedRoutineStackRouteProps,
  SelectedRoutineStackScreens,
} from '../../../infrastructure/navigation/types';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  FormButton,
  DisabledFormButton,
  ButtonTitle,
} from '../components/routine.styles';

export const SelectedRoutineScreen: FC = () => {
  const { selectWorkout, updateRoutine, isLoading, error } =
    useContext(RoutinesContext);
  const navigation = useNavigation<HomeStackNavigationProps>();
  const route =
    useRoute<
      SelectedRoutineStackRouteProps<SelectedRoutineStackScreens.SelectedRoutineScreen>
    >();

  const startWorkout = (workoutId: string): void => {
    selectWorkout(workoutId);
  };

  const navigateToSelectedWorkout = () => {
    navigation.navigate(HomeStackScreens.RoutineTabNavigaton, {
      screen: RoutineTabScreens.SelectedRoutineStack,
      params: { screen: SelectedRoutineStackScreens.SelectedWorkout },
    });
  };

  const handleOnSubmit = () => {
    updateRoutine();
    navigation.navigate(HomeStackScreens.RoutineListScreen);
  };

  return (
    <AppContainer>
      <NavigationBar
        title={'selectedRoutineScreen'}
        func={() => navigation.goBack()}
        icon={'arrow-left-bold'}
      />

      <WorkoutList
        startWorkout={startWorkout}
        navigate={() => navigateToSelectedWorkout()}
        edit={route.params.edit}
        routineId={route.params.id}
      />

      <FormButton onPress={handleOnSubmit}>
        <ButtonTitle>DONE</ButtonTitle>
      </FormButton>
    </AppContainer>
  );
};
