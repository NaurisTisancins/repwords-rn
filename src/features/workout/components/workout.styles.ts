import styled from 'styled-components/native';

export const FormContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.sizes[2]};
`;

export const FormInputContainer = styled.View`
  flex-direction: row;
`;

export const WorkoutFormCardContainer = styled.View`
  padding: ${(props) => props.theme.sizes[0]};
  background-color: ${(props) => props.theme.colors.ui.blue1};
  border-radius: ${(props) => props.theme.sizes[1]};
  margin-top: ${(props) => props.theme.sizes[1]};
`;

export const ExerciseFormListContainer = styled.View`
  padding: ${(props) => props.theme.sizes[0]};
  align-self: stretch;
`;

export const WorkoutFormCardTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  margin-left: ${(props) => props.theme.sizes[1]};
  color: #ffffff;
`;

export const WorkoutFormCardTitleContainer = styled.View``;
