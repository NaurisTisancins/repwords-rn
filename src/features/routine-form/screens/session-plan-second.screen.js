import React, { useState, useEffect, useContext } from "react";
import { ScrollView, Modal, Text } from "react-native";

import { AppContainer } from "../../../components/safe-area/app-container.component";
import {
  FormButton,
  SecondaryFormButton,
  ButtonTitle,
  ExerciseContainer,
} from "../components/routine-form.styles";

import { ExerciseCard } from "../components/exercise-card.component";

import { RoutineFormContext } from "../../../services/routine-form.service/routine-form.context";

import { NavigationBar } from "../../../components/navigation-bar/navigation-bar.component";
import { AddExercisesScreen } from "./exports";

import uuid from "react-native-uuid";
import produce from "immer";

export const SessionPlanSecondScreen = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { routine, isLoading, error, saveExercisesToSession } =
    useContext(RoutineFormContext);

  const [session, setSession] = useState({});
  const sessionId = route.params.id;

  useEffect(() => {
    if (routine && sessionId) {
      const currentSession = routine.sessionPlan.filter((item) => {
        return item.id === sessionId;
      });
      setSession(...currentSession);
    }
  }, []);

  const addExerciseToExerciseList = (data) => {
    const nextState = produce(session, (draft) => {
      const newExercise = {
        name: data,
        id: uuid.v4(),
      };
      draft.exercises.push(newExercise);
    });
    setSession(nextState);
  };

  const openModal = () => {
    setModalVisible((prevState) => !prevState);
  };

  return (
    <AppContainer>
      <NavigationBar title={session.name} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <AddExercisesScreen
          addExerciseToExerciseList={addExerciseToExerciseList}
          closeModal={openModal}
        />
      </Modal>

      <ScrollView contentConteinerStyle={{ flex: 1 }}>
        <ExerciseContainer>
          {session.exercises &&
            session.exercises.map((item) => {
              return (
                <ExerciseContainer key={item.id}>
                  <ExerciseCard exercise={item}/>
                </ExerciseContainer>
              );
            })}
        </ExerciseContainer>
        <SecondaryFormButton
          onPress={() => {
            openModal();
          }}
        >
          <ButtonTitle>ADD EXERCISE</ButtonTitle>
        </SecondaryFormButton>
      </ScrollView>

      <FormButton
        onPress={() => {
          navigation.navigate("routine-plan");
        }}
      >
        <ButtonTitle>Save</ButtonTitle>
      </FormButton>
    </AppContainer>
  );
};
