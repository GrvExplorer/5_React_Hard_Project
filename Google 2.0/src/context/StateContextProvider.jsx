import { createContext, useReducer } from "react";

export const StateProvider = createContext()

export const Wrapper = ({initialState, reducer, children}) => {
<StateProvider.Provider value={useReducer(reducer,initialState)}>
  {children}
</StateProvider.Provider>
}