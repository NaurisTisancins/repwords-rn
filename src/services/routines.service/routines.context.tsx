import React, { createContext, FC, useReducer } from 'react';
import { reducer } from './reducer';
import { initialState } from './initialState';
import {
  IState,
  ActionTypes,
  IRoutine,
  IExercise,
  IAction,
  IWorkout,
} from './types';

export const RoutinesContext = createContext<IState>({ ...initialState });

interface Props {
  children: React.ReactNode;
}

export const RoutinesContextProvider: FC<Props> = ({ children }) => {
  const [
    { routines, selectedRoutine, selectedWorkout, isLoading, error },
    dispatch,
  ] = useReducer<React.Reducer<IState, IAction>>(reducer, initialState);

  const getWorkoutPlan = () => {
    return selectedRoutine?.workoutPlan;
  };

  // Routine CRUD
  const createRoutine = (data: IRoutine): void => {
    dispatch({ type: ActionTypes.CREATE_ROUTINE, payload: data });
    dispatch({ type: ActionTypes.SELECT_ROUTINE, payload: data });
  }; //CREATE Routine

  const selectRoutine = (data: IRoutine['id']) => {
    console.log({ data });
    dispatch({ type: ActionTypes.SELECT_ROUTINE, payload: data });
  }; // SELECT Routine

  const updateRoutine = () => {
    dispatch({ type: ActionTypes.UPDATE_ROUTINE, payload: null });
  }; // UPDATE Routine

  // Workout CRUD
  const selectWorkout = (data?: IWorkout['id']) => {
    if (data) {
      dispatch({ type: ActionTypes.SELECT_WORKOUT, payload: data });
    } else {
      dispatch({ type: ActionTypes.SELECT_WORKOUT, payload: null });
    }
  }; // Set a workout as selectedWorkout

  const createWorkout = async (data: IWorkout) => {
    dispatch({ type: ActionTypes.ADD_WORKOUT, payload: data });
    dispatch({ type: ActionTypes.SELECT_WORKOUT, payload: data });
  }; // create a new Workout

  const addExercise = (data: IExercise) => {
    dispatch({ type: ActionTypes.ADD_EXERCISE, payload: data });
  };

  const updateWorkout = () => {
    dispatch({ type: ActionTypes.UPDATE_WORKOUT, payload: null });
  };

  return (
    <RoutinesContext.Provider
      value={{
        selectedRoutine,
        selectedWorkout,
        routines,
        isLoading,
        error,
        selectRoutine,
        createRoutine,
        updateRoutine,
        addExercise,
        createWorkout,
        updateWorkout,
        selectWorkout,
        // saveWorkoutList,
        getWorkoutPlan,
      }}
    >
      {children}
    </RoutinesContext.Provider>
  );
};
