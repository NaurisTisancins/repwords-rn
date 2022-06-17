import React, { useState, createContext, useEffect } from "react";
import produce from "immer";

import { getRoutines } from "./routines.service";

export const RoutinesContext = createContext();

export const RoutinesContextProvider = ({ children }) => {
  const [routines, setRoutines] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRoutines = () => {
    setIsLoading(true);
    setRoutines([]);

    setTimeout(() => {
      getRoutines()
        .then((res) => {
          setIsLoading(false);
          setRoutines(res);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 1000);
  };

  const selectRoutine = (id) => {
    setIsLoading(true);
    setSelectedRoutine(null);
    if (!id) {
      setIsLoading(false);
      return;
    }
    const index = routines.findIndex((item) => item.id === id);
    setSelectedRoutine(routines[index]);
    setIsLoading(false);
  };

  //create save routine function to pass to routine form context
  //form context has the newroutine with session plan etc
  const saveNewRoutine = (data) => {
    // console.log(typeof data, "from routine context checking type of data")
    setRoutines([...routines, data]);
  };

  useEffect(() => {
    if (!routines.length) {
      fetchRoutines();
    }
  }, [routines.length]);

  return (
    <RoutinesContext.Provider
      value={{
        selectedRoutine,
        routines,
        isLoading,
        error,
        selectRoutine,
        saveNewRoutine,
      }}
    >
      {children}
    </RoutinesContext.Provider>
  );
};
