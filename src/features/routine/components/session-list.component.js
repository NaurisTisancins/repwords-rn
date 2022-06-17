import React, { useContext } from "react";
import { Text, ScrollView } from "react-native";

import {
  SessionListContainer,
  SecondaryButton,
  ButtonTitle,
} from "./routine.styles";

import { SessionCard } from "./session-card.component";

export const SessionList = ({ navigation, routine }) => {
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
        <SecondaryButton
          onPress={() => {
            
            navigation.navigate("session-plan-first", {
              id: routine.id
            });
          }}
        >
          <ButtonTitle>ADD SESSION</ButtonTitle>
        </SecondaryButton>
      </ScrollView>
    </>
  );
};
