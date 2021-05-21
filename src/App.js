import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

import BublePage from './components/BubblePage';

function App() {

  const handleLogoutClick = (e) => {
    e.prevent.default();
    localStorage.removeItem('token')
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a 
            data-testid="logoutButton"
            onClick={handleLogoutClick}
            href="/"
          >logout
          </a>
        </header> 
        <PrivateRoute path='/bubble-page'>
          <BublePage />
        </PrivateRoute>
        <Route exact path="/">
          <Login />
        </Route>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.