import React from "react";
import { SafeArea, SafeAreaTopFiller } from "./safe-area.component";

export const AppContainer = ({ children }) => {
  return (
    <>
      <SafeAreaTopFiller />
      <SafeArea>{children}</SafeArea>
    </>
  );
};
