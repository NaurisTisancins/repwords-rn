import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeAreaTopFiller = styled(SafeAreaView)`
  flex: 0;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`;
