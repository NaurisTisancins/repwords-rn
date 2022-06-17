import React, { useState, useContext } from "react";
import { Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AppContainer } from "../../../components/safe-area/app-container.component";
import {
  FormInputField,
  FormButton,
  FormContainer,
  InputLabel,
  ButtonTitle,
} from "../components/routine-form.styles";

import uuid from "react-native-uuid";

import { RoutineFormContext } from "../../../services/routine-form.service/routine-form.context";
import { NavigationBar } from "../../../components/navigation-bar/navigation-bar.component";

export const SessionPlanFirstScreen = ({ navigation }) => {
  const { saveSessionData } = useContext(RoutineFormContext);
  const [session, setSession] = useState({
    name: "",
    exercises: [],
    id: uuid.v4(),
  });

  const saveSessionName = (val) => {
    setSession(() => {
      return {
        ...session,
        name: val,
      };
    });
  };

  return (
    <AppContainer>
      <NavigationBar title="NAME YOUR SESSION" />
      <KeyboardAwareScrollView>
        <FormContainer>
          <InputLabel>Session Name: </InputLabel>
          <FormInputField
            value={session.name}
            onChangeText={(input) => saveSessionName(input)}
          />
        </FormContainer>
      </KeyboardAwareScrollView>

      <FormButton
        onPress={() => {
          saveSessionData({ session }, () => {
            navigation.navigate("session-plan-second", {
              id: session.id,
            });
          });
        }}
      >
        <ButtonTitle>Save</ButtonTitle>
      </FormButton>
    </AppContainer>
  );
};
