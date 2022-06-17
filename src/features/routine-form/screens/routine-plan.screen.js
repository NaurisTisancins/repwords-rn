import React, { useContext } from "react";
import { AppContainer } from "../../../components/safe-area/app-container.component";
import { NavigationBar } from "../../../components/navigation-bar/navigation-bar.component";
import {
  FormButton,
  ButtonTitle,
} from "../components/routine-form.styles";

import { SessionList } from "../components/exports";

import { RoutineContext } from "../../../services/routine.service/routines.context";
import { RoutineFormContext } from "../../../services/routine-form.service/routine-form.context";

export const RoutinePlanScreen = ({ navigation }) => {
  const { routine } = useContext(RoutineFormContext);
  const { saveNewRoutine } = useContext(RoutineContext);

  return (
    <AppContainer>
      <NavigationBar title={routine.name} />

      <SessionList navigation={navigation} />

      <FormButton
        onPress={() => {
          saveNewRoutine(routine);
          navigation.navigate("routine-list")
        }}
      >
        <ButtonTitle>SAVE</ButtonTitle>
      </FormButton>
    </AppContainer>
  );
};
