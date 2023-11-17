import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import './App.css';

import User from "./Components/User"
import Dashboard from "./Components/Dashboard"


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<User/>}>
          
          </Route>
          <Route path="/" element={<User/>}>
  
          </Route>
          <Route path="/dashboard" element={<Dashboard/>}>
  
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
