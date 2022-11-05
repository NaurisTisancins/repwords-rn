import produce from 'immer';
import { IState, IAction, ActionTypes } from './types';

export const reducer: React.Reducer<IState, IAction> = (
  state: IState,
  { type, payload }: IAction
): IState => {
  switch (type) {
    case ActionTypes.CREATE_ROUTINE:
      return produce(state, (draft) => {
        draft.routines?.push(payload);
      });
    case ActionTypes.UPDATE_ROUTINE:
      return produce(state, (draft) => {
        const index = state.routines?.findIndex((routine) => {
          return routine.id === draft.selectedRoutine?.id;
        });
        if (index && draft.selectedRoutine && draft.routines) {
          draft.routines[index] = draft.selectedRoutine;
        }
      });
    case 'delete-routine':
      return state;
    case ActionTypes.SELECT_ROUTINE:
      return produce(state, (draft) => {
        const routine = draft.routines?.find(
          (routine) => routine.id === payload
        );
        if (payload === null) {
          draft.selectedRoutine = undefined;
        } else {
          draft.selectedRoutine = routine;
        }
      });
    case ActionTypes.ADD_WORKOUT:
      return produce(state, (draft) => {
        draft.selectedRoutine?.workoutPlan.push(payload);
      });
    case ActionTypes.UPDATE_WORKOUT:
      return produce(state, (draft) => {
        const index = state.selectedRoutine?.workoutPlan.findIndex((plan) => {
          return plan.id === draft.selectedWorkout?.id;
        });
        if (index && draft.selectedRoutine && draft.selectedWorkout) {
          draft.selectedRoutine.workoutPlan[index] = draft.selectedWorkout;
        }
      });
    case ActionTypes.SELECT_WORKOUT:
      return produce(state, (draft) => {
        if (payload === null) {
          draft.selectedWorkout = undefined;
        } else {
          draft.selectedWorkout = payload;
        }
      });
    case ActionTypes.ADD_EXERCISE:
      return produce(state, (draft) => {
        draft.selectedWorkout?.exercises.push(payload);
      });
    case 'delete-workout':
      return state;
    case 'delete-exercise':
      return state;

    default:
      return state;
  }
};
