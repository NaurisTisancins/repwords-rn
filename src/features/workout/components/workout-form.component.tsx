import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

import { NumberInput } from "./number-input.component";
import { FormInputContainer } from "./workout.styles";

// Exercise and its sets
const defaultValues = {
  name: "",
  id: "",
  sets: [
    {
      resistance: "",
      reps: [],
    },
  ],
};

export const WorkoutForm = () => {
  return (
    <FormInputContainer>
      <NumberInput />
    </FormInputContainer>
  );
};
