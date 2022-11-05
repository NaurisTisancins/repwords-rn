import { IState } from './types';

export const initialState: IState = {
  routines: [
    {
      id: '3fa9d5f7-27c8-40a6-93db-61e41793505e',
      name: 'Push Pull Legs',
      workoutHistory: [],
      workoutPlan: [
        {
          id: '3fa9d5f7-27c8-40a6-93db-61e41733505r',
          name: 'Push',
          done: false,
          exercises: [
            {
              id: '3fa9d5f7-27c8-40a6-93db-61e4173sfg5s',
              name: 'Incline Machine Press',
            },
            {
              id: '3f5f7a9d-c827-ks93-93db-61e4173sfg5s',
              name: 'Incline Bench Suported Row',
            },
          ],
        },
        {
          id: '317335fa9b--27c8-40a6-9361e405rd5f7d',
          name: 'Puull',
          done: false,
          exercises: [
            {
              id: '9d5-40a6-3fafc893db-61e4173sfg5s7-27',
              name: 'Incline-Bench Asisted DB Rows',
            },
            {
              id: '93f7a9d-c827-ks61e4fg5s9173s33f5-db-',
              name: 'Cable Vertical pull',
            },
          ],
        },
      ],
    },
  ],
  selectedRoutine: undefined,
  selectedWorkout: undefined,
  isLoading: false,
  error: { error: false, message: '' },
  selectRoutine: () => {},
  createRoutine: () => {},
  updateRoutine: () => {},
  addExercise: () => {},
  createWorkout: () => {},
  updateWorkout: () => {},
  selectWorkout: () => {},
  saveWorkoutList: () => {},
};
