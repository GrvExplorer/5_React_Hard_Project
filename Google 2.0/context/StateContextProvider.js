import { createContext, useContext, useReducer } from "react";

export const StateProvider = createContext()

export const Wrapper = ({initialState, reducer, children}) => {
<StateProvider.Provider value={initialState, reducer}>
  {children}
</StateProvider.Provider>
}
