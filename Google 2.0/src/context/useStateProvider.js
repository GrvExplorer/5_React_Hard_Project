import { useContext } from "react"
import { StateProvider } from "./StateContextProvider"

const useStateProvider = () => useContext(StateProvider)

export default useStateProvider