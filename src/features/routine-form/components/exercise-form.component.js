import React, { useState } from "react";

import {
  FormInputField,
  SecondaryFormButton,
  ButtonTitle,
  InputLabel,
} from "../components/routine-form.styles";

export const ExerciseForm = ({ saveExercise, closeModal }) => {
  const [exercise, setExercise] = useState("");

  return (
    <>
      <InputLabel>Exercise Name: </InputLabel>
      <FormInputField
        value={exercise}
        onChangeText={(input) => setExercise(input)}
      />

      <SecondaryFormButton
        onPress={() => {
          saveExercise(exercise);
          closeModal();
        }}
      >
        <ButtonTitle>ADD EXERCISE</ButtonTitle>
      </SecondaryFormButton>
    </>
  );
};
