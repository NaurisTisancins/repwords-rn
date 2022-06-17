import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import {
  useFonts as useRobotoCondensed,
  RobotoCondensed_400Regular,
} from "@expo-google-fonts/roboto-condensed";

import { theme } from "./src/infrastructure/theme/index";
import { Navigation } from "./src/infrastructure/navigation/index";

export default function App() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });
  const [robotoCondensedLoaded] = useRobotoCondensed({
    RobotoCondensed_400Regular,
  });

  if (!robotoLoaded || !robotoCondensedLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
          <Navigation />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
