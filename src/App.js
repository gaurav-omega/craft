import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



import './App.css';

import User from "./Components/User"
import Dashboard from "./Components/Dashboard"
import CreateOrder from "./Components/CreateOrder";

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
          <Route path="/createOrder" element={<CreateOrder/>}>
    
          </Route>

        </Routes>
      </Router>
  );
}

export default App;
