import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";

// export const FormContainer = styled.View`
//   flex: 1;
//   padding: ${(props) => props.theme.sizes[2]};
// `;

export const Button = styled(TouchableOpacity)`
  height: ${(props) => props.theme.sizes[3]};
  width: 70%;
  background-color: ${(props) => props.theme.colors.brand.primary}
  color: ${(props) => props.theme.colors.text.primary}
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
  justify-content: center;
  align-self: center;
`;

export const SecondaryButton = styled(TouchableOpacity)`
  height: ${(props) => props.theme.sizes[3]};
  width: 70%;
  background-color: ${(props) => props.theme.colors.brand.secondary}
  color: ${(props) => props.theme.colors.text.primary}
  border-radius: 42px;
  justify-content: center;
  align-self: center;
`;

export const ButtonTitle = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const TitleContainer = styled.View`
  padding: ${(props) => props.theme.sizes[3]};
  align-self: center;
`;

export const ExerciseContainer = styled.View`
  padding: ${(props) => props.theme.sizes[0]};
  align-self: stretch;
`;

export const SessionListContainer = styled.View`
  padding: ${(props) => props.theme.sizes[0]};
  align-self: stretch;
`;

export const MiniSessionCard = styled.View``;
