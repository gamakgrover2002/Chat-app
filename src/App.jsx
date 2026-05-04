import { Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
function App(){
  return (
    <Switch>
       <h1>Welcome to the App!</h1>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>
      <PrivateRoute  path="/home">
        <Home />
      </PrivateRoute>
      
     
    </Switch>
  );
}
export default App;