import { Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./component/PrivateRoute";
function App(){
  return (
    <Switch>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>
      <PrivateRoute  path="/home">
        <Home />
      </PrivateRoute>
      
      <h1>Welcome to the App!</h1>
    </Switch>
  );
}
export default App;