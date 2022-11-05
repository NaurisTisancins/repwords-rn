import React from "react";
import { View } from "react-native";
import { SafeArea, SafeAreaTopFiller } from "./safe-area.component";

export const AppContainer = ({ children }) => {
  return (
    <>
      <SafeArea>{children}</SafeArea>
    </>
  );
};
