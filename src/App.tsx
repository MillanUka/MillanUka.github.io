import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { parse } from 'path';


function App() {
  const [setTestData, testData] = useState({});
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test</h1>
      </header>
      <div>

      </div>
    </div>
  );
}

export default App;
