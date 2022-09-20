import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./redux/rootReducer";
import Counter from "./components/Counter/container";

const App = () => 
<Counter />;

ReactDOM.render(<App />, document.getElementById("root"));
