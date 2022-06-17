import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { RoutineCard } from "../components/routine-card.component";
import { AppContainer } from "../../../components/safe-area/app-container.component";
import { NavigationBar } from "../../../components/navigation-bar/navigation-bar.component";
import { ActivityIndicator } from "react-native-paper";

import {
  RoutineListContainer,
  AddRoutineButton,
  ButtonTitle,
} from "../components/routine-list.styles";

import { RoutinesContext } from "../../../services/routine.service/routines.context";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const RoutineListScreen = ({ navigation }) => {
  const { routines, selectRoutine, isLoading, error } =
    useContext(RoutinesContext);

  return (
    <AppContainer>
      <NavigationBar title="Your Routines" />
      <ScrollView contentConteinerStyle={{ flex: 1 }}>
        {isLoading ? (
          <RoutineListContainer>
            <ActivityIndicator
              size="large"
              animating={true}
              color={Colors.red800}
            />
          </RoutineListContainer>
        ) : (
          <RoutineListContainer>
            {routines &&
              routines.map((item) => {
                return (
                  <RoutineListContainer key={item.id}>
                    <RoutineCard routine={item} selectRoutine={selectRoutine} />
                  </RoutineListContainer>
                );
              })}
          </RoutineListContainer>
        )}
      </ScrollView>

      {/* <AddRoutineButton onPress={() => navigation.navigate("create-routine")}>
        <ButtonTitle variant="label">Create Routine</ButtonTitle>
      </AddRoutineButton> */}
    </AppContainer>
  );
};
