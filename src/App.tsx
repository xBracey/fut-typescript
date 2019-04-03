import * as React from "react";
import Main from "./containers/main";
import Fut from "./containers/fut";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/header";
import Routing from "./components/routing";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
          <div className="top-level-container">
            <Header />
            <Route path="/" component={Routing} />
            <Route path="/" exact component={Main} />
            <Route path="/fut" exact component={Fut} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
