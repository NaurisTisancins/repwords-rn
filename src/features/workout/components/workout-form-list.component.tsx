import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { WorkoutFormCard } from "./workout-form-card.component";

export const WorkoutFormList = ({ selectedWorkout }) => {
  const { exercises } = selectedWorkout;
  return (
    <>
      {exercises &&
        exercises.map((item) => {
          return <WorkoutFormCard key={item.id} title={item.name} />;
        })}
    </>
  );
};
