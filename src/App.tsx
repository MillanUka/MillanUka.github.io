import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className="nav-link">My Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/socials" className="nav-link">Socials</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/socials" component={Socials} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
