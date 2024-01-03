import { useContext } from "react";
import { StateContext } from "./StateProvider";

export const useStateProvider = () => useContext(StateContext)
