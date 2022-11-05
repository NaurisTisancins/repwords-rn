import React, { FC } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import { IRoutine } from '../../../services/routines.service/types';

interface IRoutineCardProps {
  routine: IRoutine;
  selectRoutine: () => void;
  navigate: () => void;
}

export const RoutineCard: FC<IRoutineCardProps> = ({
  routine,
  selectRoutine,
  navigate,
}) => {
  const onRoutineSelect = () => {
    selectRoutine();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onRoutineSelect();
        navigate();
      }}
    >
      <View>
        <Text style={styles.text}>{routine.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Icon
          reverse
          name='arrow-forward'
          type='material-icons'
          containerStyle={styles.iconContainer}
          color={'transparent'}
          iconStyle={styles.buttonIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#29627D',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginLeft: 12,
    color: '#FFFFFF',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    width: 24,
    height: 32,
  },
  buttonIcon: {
    color: '#FFFFFF',
    fontSize: 32,
  },
  iconContainer: {
    backgroundColor: 'transparent',
  },
});
