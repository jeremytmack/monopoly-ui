import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from "./Board.js";
import User from "./User.js";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/board">
            <Board />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
