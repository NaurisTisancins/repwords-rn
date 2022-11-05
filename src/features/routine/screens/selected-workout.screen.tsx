// displays exercises in the selected routines selected workout
import React, { useContext, useState } from 'react';
import { AppContainer } from '../../../components/safe-area/app-container.component';
import { NavigationBar } from '../../../components/navigation-bar/navigation-bar.component';
import { PrimaryButton, ButtonTitle } from '../components/routine.styles';
import { ExerciseList } from '../components/exercise-list.component';
import { InputModal } from '../components/input-modal.component';

import { RoutinesContext } from '../../../services/routines.service/routines.context';
import {
  SelectedRoutineStackNavigationProps,
  SelectedRoutineStackScreens,
} from '../../../infrastructure/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { Modal } from 'react-native';
import { IExercise } from '../../../services/routines.service/types';

export const SelectedWorkoutScreen = () => {
  const {
    selectedWorkout,
    updateWorkout,
    selectWorkout,
    addExercise,
    isLoading,
    error,
  } = useContext(RoutinesContext);
  const navigation = useNavigation<SelectedRoutineStackNavigationProps>();
  const [modalVisible, setModalVisible] = useState(false);

  const addExerciseToWorkoutPlan = (data: IExercise) => {
    const newExercise = {
      ...data,
    };
    addExercise(newExercise);
    setModalVisible(false);
  };

  const unSelectWorkout = () => {
    selectWorkout('');
    navigation.goBack();
  };

  return (
    <AppContainer>
      <NavigationBar
        title={'SelectedWorkoutScreen'}
        func={unSelectWorkout}
        // icon={"arrow-left-bold"}
      />

      <Modal
        animationType='slide'
        statusBarTranslucent={true}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <InputModal
          closeModal={setModalVisible}
          title='Exercise Name'
          func={addExerciseToWorkoutPlan}
        />
      </Modal>

      <ExerciseList setModal={setModalVisible} />
      <PrimaryButton
        onPress={() => {
          updateWorkout();
          navigation.navigate(
            SelectedRoutineStackScreens.SelectedRoutineScreen,
            { edit: true }
          );
        }}
      >
        <ButtonTitle variant='label'>DONE</ButtonTitle>
      </PrimaryButton>
    </AppContainer>
  );
};
