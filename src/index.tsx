import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

import { createStore } from "redux";
import { player } from "./reducers/index";
import { StoreState } from "./types/index";

const store = createStore<StoreState, any, any, any>(player, {
  playerID: ""
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
