import { createContext, useReducer } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
