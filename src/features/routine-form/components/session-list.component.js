import React, { useContext } from "react";
import { Text, ScrollView } from "react-native";

import {
  SessionListContainer,
  SecondaryFormButton,
  ButtonTitle,
} from "./routine-form.styles";

import { SessionCard } from "./session-card.component";

import { RoutineFormContext } from "../../../services/routine-form.service/routine-form.context";

export const SessionList = ({ navigation }) => {
  const { routine } = useContext(RoutineFormContext);
  const { sessionPlan } = routine;

  return (
    <>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <SessionListContainer>
          {sessionPlan.length ? (
            sessionPlan.map((session) => {
              return (
                <SessionListContainer key={session.id}>
                  <SessionCard session={session} />
                </SessionListContainer>
              );
            })
          ) : (
            <SessionListContainer style={{ alignItems: "center" }}>
              <Text>There are no workouts in this routine</Text>
            </SessionListContainer>
          )}
        </SessionListContainer>
        <SecondaryFormButton
          onPress={() => {
            navigation.navigate("session-plan-first");
          }}
        >
          <ButtonTitle>ADD SESSION</ButtonTitle>
        </SecondaryFormButton>
      </ScrollView>
    </>
  );
};
