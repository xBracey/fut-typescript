import * as React from "react";
import "./App.css";
import Hello from "./containers/Hello";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Hello />
      </div>
    );
  }
}

export default App;
