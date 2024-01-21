import { createContext, useContext, useReducer } from "react";

const StateProvider = createContext()

export const Wrapper = ({initialState, reducer, children}) => {
<StateProvider.Provider value={useReducer(reducer,initialState)}>
  {children}
</StateProvider.Provider>
}

const useStateProvider = () => useContext(StateProvider)

export default useStateProvider