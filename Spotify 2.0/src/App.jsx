import { useEffect } from "react";
import { useStateProvider } from "./Context/useState";
import { actionTypes } from "./action/action.type";
import { Feed, Login } from "./pages";

function App() {
  const [state, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: actionTypes.SET_TOKEN, token });
      console.log(state.token);
    
  }, [state.token, dispatch]);

  return <div>{state.token ? <Feed /> : <Login />}</div>;
}

export default App;
