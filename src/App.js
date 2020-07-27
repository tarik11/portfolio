import React from "react";
import "./App.css";
import Home from "./pages/home";
import Projects from "./pages/projects";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        {" "}
        <Switch>
          <Route exact path="/projects" component={Projects}></Route>

          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
