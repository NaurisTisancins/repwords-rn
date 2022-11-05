import React, { FC } from 'react';
import {
  NavBarContainer,
  Title,
  TitleContainer,
} from './navigation-bar.styles';
import { IconButton, Colors } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

interface INavigationBarProps {
  title?: string;
  func?: () => any;
  icon?: string;
}

export const NavigationBar: FC<INavigationBarProps> = ({
  title,
  func,
  icon,
}) => {
  const execCustomFuncs = () => {
    func ? func() : null;
  };
  return (
    <NavBarContainer>
      {icon && (
        <IconButton
          color={'#58BEAD'}
          size={20}
          icon={icon}
          onPress={execCustomFuncs}
        />
      )}
      <TitleContainer>
        <Title variant='body'>{title}</Title>
      </TitleContainer>
    </NavBarContainer>
  );
};
