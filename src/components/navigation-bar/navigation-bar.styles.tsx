import styled from "styled-components/native";
import { Text } from "../typography/text.component";

export const TitleContainer = styled.View`
  align-self: center;
  margin-right: ${(props) => props.theme.sizes[0]}
`;

export const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h5};
`;

export const NavBarContainer = styled.View`
  padding: ${(props) => props.theme.sizes[0]};
  border-bottom-color: #757575;
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
`;
