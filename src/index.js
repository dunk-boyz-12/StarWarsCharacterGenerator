import React from "react";
import ReactDOM from "react-dom";
//components
import SelectButton from "./components/Button";
//styles
import "./styles/global.scss";
function App() {
  return (
    <React.Fragment>
      <SelectButton />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
