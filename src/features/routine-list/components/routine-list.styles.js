import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";

// export const RoutineList = styled(FlatList).attrs({
//   contentContainerStyle: {
//     flex: 1,
//     alignItems: "flex-start",
//   },
// })``;

export const RoutineListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.sizes[0]};
`;

export const ListItemLabel = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const TitleContainer = styled.View`
  padding: ${(props) => props.theme.sizes[3]};
  align-self: center;
`;

export const ListTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h3};
`;

export const AddRoutineButton = styled(TouchableOpacity)`
  height: ${(props) => props.theme.sizes[3]};
  width: 70%;
  background-color: ${(props) => props.theme.colors.brand.primary}
  color: ${(props) => props.theme.colors.text.primary}
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
  justify-content: center;
  align-self: center;
`;

export const ButtonTitle = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.title};
`;
