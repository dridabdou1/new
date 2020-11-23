import React from "react";
import * as Routes from "./constants/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Signup, Signin, Browse } from "./pages";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={Routes.Home}>
          <Home></Home>
        </Route>
        <Route exact path={Routes.Browse}>
          <Browse></Browse>
        </Route>
        <Route exact path={Routes.Signin}>
          <Signin></Signin>
        </Route>
        <Route exact path={Routes.Signup}>
          <Signup></Signup>
        </Route>
      </Router>
    </div>
  );
}

export default App;
