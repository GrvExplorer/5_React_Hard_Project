import { Route, Redirect } from "react-router-dom"
import Results from './Results'

function Router() {
  return (
  
    <Route path="/" element={<Results />} >
      <Redirect to="/search" />
    </Route>

    )
}

export default Router