import * as React from "react";
import Main from "./containers/Main";
import Player from "./containers/Player";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact component={Main} />
            <Route path="/player" exact component={Player} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
