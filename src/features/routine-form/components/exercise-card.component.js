import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

export const ExerciseCard = ({ exercise }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{exercise.name}</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Icon
          reverse
          name="close"
          type="material-icons"
          containerStyle={styles.iconContainer}
          color={"transparent"}
          iconStyle={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#EFDC9E",
    borderRadius: 16,
    padding: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginLeft: 12,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    width: 24,
    height: 24,
  },
  buttonIcon: {
    color: "red",
    fontSize: 32,
  },
  iconContainer: {
    backgroundColor: "transparent",
  },
});
