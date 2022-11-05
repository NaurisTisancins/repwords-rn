import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Button = styled(TouchableOpacity)`
  height: ${(props) => props.theme.sizes[3]};
  width: 70%;
  background-color: ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: ${(props) => props.theme.sizes[0]};
  border-radius: ${(props) => props.theme.sizes[0]};
  justify-content: center;
  align-self: center;
`;

export const FormButton = styled(TouchableOpacity)`
  height: ${(props) => props.theme.sizes[3]};
  width: 70%;
  background-color: ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: ${(props) => props.theme.sizes[0]};
  border-radius: ${(props) => props.theme.sizes[0]};
  justify-content: center;
  align-self: center;
`;

export const DisabledFormButton = styled(TouchableOpacity)`
  height: ${(props) => props.theme.sizes[3]};
  width: 70%;
  background-color: ${(props) => props.theme.colors.ui.disabled};
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: ${(props) => props.theme.sizes[0]};
  border-radius: ${(props) => props.theme.sizes[0]};
  justify-content: center;
  align-self: center;
`;

export const SecondaryFormButton = styled(TouchableOpacity)`
  height: ${(props) => props.theme.sizes[3]};
  width: 70%;
  background-color: ${(props) => props.theme.colors.brand.secondary};
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: ${(props) => props.theme.sizes[0]};
  border-radius: ${(props) => props.theme.sizes[0]};
  justify-content: center;
  align-self: center;
`;

export const PrimaryButton = styled(TouchableOpacity)`
  height: ${(props) => props.theme.sizes[3]};
  width: 70%;
  background-color: ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: ${(props) => props.theme.sizes[0]};
  border-radius: ${(props) => props.theme.sizes[0]};
  justify-content: center;
  align-self: center;
`;

export const SecondaryButton = styled(TouchableOpacity)`
  height: ${(props) => props.theme.sizes[3]};
  width: 70%;
  background-color: ${(props) => props.theme.colors.brand.secondary};
  color: ${(props) => props.theme.colors.text.primary};
  border-radius: ${(props) => props.theme.sizes[0]};
  justify-content: center;
  align-self: center;
`;

export const Pressable = styled(TouchableOpacity)``;

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

export const WorkoutListContainer = styled.View`
  padding: ${(props) => props.theme.sizes[0]};
  align-self: stretch;
`;

export const ExerciseListContainer = styled.View`
  padding: ${(props) => props.theme.sizes[0]};
  align-self: stretch;
`;

export const FormContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.sizes[2]};
`;

export const InputLabel = styled.Text`
  color: ${(props) =>
    props.err ? props.theme.colors.ui.error : props.theme.colors.ui.primary};
  margin-bottom: 8px;
  font-size: 16px;
`;

export const FormInputField = styled.TextInput`
  border-width: 1px;
  border-color: ${(props) =>
    props.err ? props.theme.colors.ui.error : props.theme.colors.ui.secondary};
  border-radius: ${(props) => props.theme.sizes[0]};
  padding: 8px;
  font-size: 16px;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const InputErrorMessage = styled.Text`
  color: ${(props) => props.theme.colors.ui.error};
  align-self: stretch;
`;

export const FormTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h4};
  text-align: center;
`;

export const FormSubTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h5};
  text-align: center;
`;

export const RoutineListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.sizes[0]};
`;

export const ListItemLabel = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const ListTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h3};
`;
