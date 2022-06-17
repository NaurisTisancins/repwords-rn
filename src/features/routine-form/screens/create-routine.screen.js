import React, { useState, useContext } from "react";
import { AppContainer } from "../../../components/safe-area/app-container.component";
import {
  FormInputField,
  FormButton,
  FormContainer,
  InputLabel,
  ButtonTitle,
} from "../components/exports";

import { RoutineFormContext } from "../../../services/routine-form.service/routine-form.context";
import { NavigationBar } from "../../../components/navigation-bar/navigation-bar.component";

export const CreateRoutineScreen = ({ navigation }) => {
  const { saveRoutineData } = useContext(RoutineFormContext);
  const [name, setName] = useState("");
  
  return (
    <AppContainer>
      <NavigationBar title="Name your Routine" />
      <FormContainer>
        <InputLabel>Routine Name: </InputLabel>
        <FormInputField
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="routine name"
        />
      </FormContainer>

      <FormButton
        onPress={() => {
          saveRoutineData(name, () => {
            navigation.navigate("routine-plan");
          });
        }}
      >
        <ButtonTitle>Save</ButtonTitle>
      </FormButton>
    </AppContainer>
  );
};
