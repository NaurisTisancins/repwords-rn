import React, { FC } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import { IWorkout } from '../../../services/routines.service/types';

interface Props {
  workout: IWorkout;
  openWorkout: () => void;
  startWorkout?: () => void;
}

export const WorkoutCard: FC<Props> = ({
  workout,
  startWorkout,
  openWorkout,
}) => {
  const { done } = workout;
  return (
    <View>
      <TouchableOpacity onPress={openWorkout} style={styles.container}>
        <View>
          <Text style={styles.text}>{workout.name}</Text>
        </View>
        {done ? (
          <View style={styles.buttonContainer}>
            <Icon
              reverse
              name='done'
              type='material-icons'
              containerStyle={styles.iconContainer}
              color={'transparent'}
              iconStyle={styles.buttonIcon}
            />
          </View>
        ) : (
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
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#29627D',
    borderRadius: 4,
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
