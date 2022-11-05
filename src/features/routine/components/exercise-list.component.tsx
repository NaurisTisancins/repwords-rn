import React, { Dispatch, FC, useContext, useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import {
  ExerciseListContainer,
  SecondaryButton,
  ButtonTitle,
} from './routine.styles';
import { ExerciseCard } from './exercise-card.component';
import { RoutinesContext } from '../../../services/routines.service/routines.context';
import { useNavigation } from '@react-navigation/native';
import { SelectedRoutineStackNavigationProps } from '../../../infrastructure/navigation/types';

type Props = {
  setModal: Dispatch<React.SetStateAction<boolean>>;
};

export const ExerciseList: FC<Props> = ({ setModal }) => {
  const { selectedWorkout } = useContext(RoutinesContext);
  const navigation = useNavigation<SelectedRoutineStackNavigationProps>();
  // const { exercises } = selectedWorkout;

  useEffect(() => {}, [selectedWorkout]);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <ExerciseListContainer>
        {selectedWorkout?.exercises.length ? (
          selectedWorkout.exercises.map((exercise) => {
            return (
              <ExerciseListContainer key={exercise.id}>
                <ExerciseCard exercise={exercise} />
              </ExerciseListContainer>
            );
          })
        ) : (
          <ExerciseListContainer style={{ alignItems: 'center' }}>
            <Text>There are no exercises in this workout</Text>
          </ExerciseListContainer>
        )}
        <SecondaryButton
          onPress={() => {
            setModal(true);
          }}
        >
          <ButtonTitle>ADD EXERCISE</ButtonTitle>
        </SecondaryButton>
      </ExerciseListContainer>
    </ScrollView>
  );
};
