import React from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components/native';

enum SizeVariant {
  small = 1,
  medium = 2,
  large = 3,
}

enum PositionVariant {
  top = 'marginTop',
  left = 'marginLeft',
  right = 'marginRight',
  bottom = 'marginBottom',
}

interface IVariantProps {
  position: PositionVariant;
  size: SizeVariant;
  theme: DefaultTheme;
}

const getVariant = (position, size, theme) => {
  const sizeIndex = SizeVariant[size];
  const property = PositionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
