import React from "react";
import "./App.css";
import { Route, NavLink, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <ul className="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">My Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="content">
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
