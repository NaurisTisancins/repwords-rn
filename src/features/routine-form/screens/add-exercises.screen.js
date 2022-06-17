import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { AppContainer } from "../../../components/safe-area/app-container.component";
import { ExerciseForm } from "../components/exercise-form.component";
import { FormContainer } from "../components/routine-form.styles";

export const AddExercisesScreen = ({
  addExerciseToExerciseList,
  closeModal,
}) => {
  return (
    <AppContainer>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <FormContainer>
          <ExerciseForm
            saveExercise={addExerciseToExerciseList}
            closeModal={closeModal}
          />
        </FormContainer>
      </KeyboardAvoidingView>
    </AppContainer>
  );
};
