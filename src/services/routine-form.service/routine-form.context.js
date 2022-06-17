import React, { useState, createContext, useReducer } from "react";
import produce from "immer";

import uuid from "react-native-uuid";

export const RoutineFormContext = createContext();

const initialState = {
  routine: {
    name: "",
    id: "",
    sessionPlan: [],
  },
  isLoading: false,
  error: false,
};

// REDUCER
function reducer(state, { type, payload }) {
  switch (type) {
    case "save-routine-data":
      return produce(state, (draft) => {
        draft.routine.name = payload;
        draft.routine.id = uuid.v4();
      });
    case "save-session-data":
      return produce(state, (draft) => {
        draft.routine.sessionPlan.push({ ...payload });
      });
    case "save-session-exercises":
      return produce(state, (draft) => {
        const idx = state.routine.sessionPlan.findIndex((item) => {
          return item.id === payload.sessionId;
        });
        const session = draft.sessionPlan[idx];
        session.exercises.push({ ...payload.exercises });
      });
    // case "get-session-by-id":
    //   const sessionIndex = state.routine.sessionPlan.findIndex((sesh) => {
    //     return sesh.id === payload.id;
    //   });
    //   return state.routine.sessionPlan[sessionIndex];
  }
}

// CONTEXT COMPONENT
export const RoutineFormContextProvider = ({ children }) => {
  const [{ routine, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  console.log(
    "Routine in routine-form-context",
    JSON.stringify(routine, null, 2)
  );

  // save routine name
  const saveRoutineData = (name, cb) => {
    dispatch({ type: "save-routine-data", payload: name });
    cb();
  };

  // access nested object properties hence were using immer
  const saveSessionData = (data, cb) => {
    const sessionExists = routine.sessionPlan.filter(
      (session) => session.id === data.id
    );
    if (!sessionExists.length) {
      dispatch({ type: "save-session-data", payload: data.session });
    }
    cb();
  };

  const saveExercisesToSession = (data, cb) => {
    dispatch({ type: "save-session-exercises", payload: data });
    cb();
  };

  // const getSessionById = (id) => {
  //   setIsLoading(true);
  //   return dispatch({ type: "get-session-by-id", payload: id });
  // };

  return (
    <RoutineFormContext.Provider
      value={{
        routine,
        isLoading,
        error,
        saveRoutineData,
        saveSessionData,
        saveExercisesToSession,
        
      }}
    >
      {children}
    </RoutineFormContext.Provider>
  );
};
