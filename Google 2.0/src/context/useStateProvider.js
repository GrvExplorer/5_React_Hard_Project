import { useContext } from "react"
import { StateContext } from "./StateContextProvider"

export const useStateProvider = () => useContext(StateContext)

