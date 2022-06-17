import React, { useContext } from "react";
import { AppContainer } from "../../../components/safe-area/app-container.component";
import { NavigationBar } from "../../../components/navigation-bar/navigation-bar.component";

import { SessionList } from "../components/session-list.component";

import { RoutinesContext } from "../../../services/routine.service/routines.context";

export const RoutineScreen = ({ navigation }) => {
  const { selectedRoutine, isLoading, error, selectRoutine } =
    useContext(RoutinesContext);

  const unSelectRoutine = () => {
    selectRoutine(null);
    navigation.navigate("routine-list");
  };

  return (
    <>
      <AppContainer>
        <NavigationBar
          title={selectedRoutine.name}
          func={unSelectRoutine}
          icon={"arrow-left"}
        />
        <SessionList routine={selectedRoutine} />
      </AppContainer>
    </>
  );
};
