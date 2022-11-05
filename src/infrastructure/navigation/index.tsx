import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStackNavigation } from './home-stack.navigator';

export const Navigation = () => {
  return <NavigationContainer>{<HomeStackNavigation />}</NavigationContainer>;
};
