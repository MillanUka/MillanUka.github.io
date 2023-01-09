import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <h1 className="bg-dark" style={{ width: "100%", color: "white", textAlign: "center", height: "60px" }}>
        Hi, I'm Millan
      </h1>

      <div className="container-fluid bg-light">
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;
