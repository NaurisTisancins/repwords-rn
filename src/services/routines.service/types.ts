/** State Types */
export interface IState {
  routines?: IRoutine[];
  selectedRoutine?: IRoutine;
  selectedWorkout?: IWorkout;
  isLoading: boolean;
  error?: IError;
  /** State functions */
  selectRoutine: (id: IRoutine['id']) => void;
  createRoutine: (data: IRoutine) => void;
  updateRoutine: () => void;
  addExercise: (data: IExercise) => void;
  createWorkout: (data: IWorkout) => void;
  updateWorkout: () => void;
  selectWorkout: (id: IRoutine['id']) => void;
  getWorkoutPlan: () => IWorkout[] | undefined;
}

export interface IRoutine {
  id: string;
  name: string;
  workoutHistory: [];
  workoutPlan: IWorkout[];
}

export interface IWorkout {
  id: string;
  name: string;
  done: boolean;
  exercises: IExercise[];
}

export interface IExercise {
  id: string;
  name: string;
}

export interface IError {
  error: boolean;
  message?: string;
}

/** Reducer Types */

export interface IReducer {}

export interface IAction {
  type: string;
  payload?: any;
}

export enum ActionTypes {
  CREATE_ROUTINE = 'create-routine',
  SELECT_ROUTINE = 'select-routine',
  UPDATE_ROUTINE = 'update-routine',
  ADD_WORKOUT = 'add-workout',
  SELECT_WORKOUT = 'select-workout',
  SAVE_WORKOUTS = 'save-workouts',
  UPDATE_WORKOUT = 'update-workout',
  ADD_EXERCISE = 'add-exercise',
  DELETE_WORKOUT = 'delete-workout',
  DELETE_EXERCISE = 'delete-exercise',
}
