import React, { useState, useContext, useRef, MutableRefObject } from 'react';
import { ScrollView, Modal, TextInput } from 'react-native';
import { RoutineCard } from '../components/routine-card.component';
import { AppContainer } from '../../../components/safe-area/app-container.component';
import { NavigationBar } from '../../../components/navigation-bar/navigation-bar.component';
import {
  RoutineListContainer,
  PrimaryButton,
  ButtonTitle,
} from '../components/routine.styles';
import { InputModal } from '../components/input-modal.component';
import { RoutinesContext } from '../../../services/routines.service/routines.context';
import { IRoutine } from '../../../services/routines.service/types';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {
  HomeStackScreenParams,
  HomeStackScreens,
  RoutineTabScreenParams,
  RoutineTabScreens,
  SelectedRoutineStackScreenParams,
  SelectedRoutineStackScreens,
} from '../../../infrastructure/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Spacer } from '../../../components/spacer/spacer.component';

type RoutineListNavigationProps = CompositeNavigationProp<
  StackNavigationProp<
    HomeStackScreenParams,
    HomeStackScreens.RoutineListScreen
  >,
  CompositeNavigationProp<
    StackNavigationProp<SelectedRoutineStackScreenParams>,
    BottomTabNavigationProp<RoutineTabScreenParams>
  >
>;

export const RoutinesListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<RoutineListNavigationProps>();

  const { routines, createRoutine, selectRoutine, isLoading, error } =
    useContext(RoutinesContext);

  const selectAndCreateRoutine = (data: IRoutine) => {
    const newRoutine: IRoutine = {
      ...data,
      workoutPlan: [],
      workoutHistory: [],
    };
    createRoutine(newRoutine);
    selectRoutine(data.id);
    setModalVisible(false);
    navigateToSelectedRoutineAndEdit(data.id);
  };

  const navigateToSelectedRoutineAndEdit = (id: string) => {
    navigation.navigate(HomeStackScreens.RoutineTabNavigaton, {
      screen: RoutineTabScreens.SelectedRoutineStack,
      params: {
        screen: SelectedRoutineStackScreens.SelectedRoutineScreen,
        params: {
          edit: true,
          id: id,
        },
      },
    });
  };
  const navigateToSelectedRoutine = (id: string) => {
    navigation.navigate(HomeStackScreens.RoutineTabNavigaton, {
      screen: RoutineTabScreens.SelectedRoutineStack,
      params: {
        screen: SelectedRoutineStackScreens.SelectedRoutineScreen,
        params: {
          edit: false,
          id: id,
        },
      },
    });
  };

  return (
    <AppContainer>
      <NavigationBar title='RoutinesListScreen' />

      <Modal
        animationType='slide'
        statusBarTranslucent={true}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <InputModal
          closeModal={setModalVisible}
          title='Routine Name'
          func={selectAndCreateRoutine}

          // navBarFunc={toggleModal}
          // icon={'arrow-left-bold'}
        />
      </Modal>

      <ScrollView contentConteinerStyle={{ flex: 1 }}>
        {/* {isLoading ? (
          <RoutineListContainer>
            <ActivityIndicator
              size="large"
              animating={true}
              color={Colors.red800}
            />
          </RoutineListContainer>
        ) : ( */}
        <RoutineListContainer>
          {routines &&
            routines.map((item) => {
              return (
                <RoutineListContainer key={item.id}>
                  <RoutineCard
                    routine={item}
                    selectRoutine={() => selectRoutine(item.id)}
                    navigate={() => navigateToSelectedRoutine(item.id)}
                  />
                </RoutineListContainer>
              );
            })}
        </RoutineListContainer>
        {/* ) */}
      </ScrollView>

      <PrimaryButton onPress={() => setModalVisible(true)}>
        <ButtonTitle variant='label'>Create Routine</ButtonTitle>
      </PrimaryButton>
      <Spacer position='bottom' size='large' />
    </AppContainer>
  );
};
