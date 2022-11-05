import React, { FC, useContext } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { AppContainer } from '../../../components/safe-area/app-container.component';
import { NavigationBar } from '../../../components/navigation-bar/navigation-bar.component';
import { WorkoutFormList } from '../components/workout-form-list.component';
import { ExerciseFormListContainer } from '../components/workout.styles';
import { RoutinesContext } from '../../../services/routines.service/routines.context';
import { useNavigation } from '@react-navigation/native';
import { SelectedRoutineStackNavigationProps } from '../../../infrastructure/navigation/types';

// interface Props {
//   navigation: StackNavigationProp<
//     SelectedRoutineStackParamList,
//     'WorkoutScreen'
//   >;
// }

export const WorkoutScreen: FC = () => {
  const { selectedWorkout } = useContext(RoutinesContext);
  const navigation = useNavigation<SelectedRoutineStackNavigationProps>();

  return (
    <AppContainer>
      <NavigationBar
        title={'WorkoutScreen'}
        func={() => navigation.goBack()}
        icon={'arrow-left-bold'}
      />
      <ScrollView>
        <ExerciseFormListContainer>
          <WorkoutFormList selectedWorkout={selectedWorkout} />
        </ExerciseFormListContainer>
      </ScrollView>
    </AppContainer>
  );
};
