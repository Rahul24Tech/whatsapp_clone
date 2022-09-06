import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="app__body">
            <Sidebar />
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route exact path="/">
              <Chat />
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
