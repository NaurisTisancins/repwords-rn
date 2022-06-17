import React from "react";
import {
  NavBarContainer,
  Title,
  TitleContainer,
} from "./navigation-bar.styles";

import { IconButton, Colors } from "react-native-paper";


export const NavigationBar = ({ title, icon, func }) => {
  return (
    <NavBarContainer>
      <IconButton
        color={Colors.red500}
        size={20}
        icon={icon}
        onPress={func}
      />
      <TitleContainer>
        <Title variant="body">{title}</Title>
      </TitleContainer>
    </NavBarContainer>
  );
};
