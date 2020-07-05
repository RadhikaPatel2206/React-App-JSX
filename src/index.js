// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";
// Create React Component
const App = () => {
  const labelText = "Enter Name: ";
  const buttonText = "Submit";
  return (
    <div>
      <h1>Part 1</h1>
      <h1>Hello World!</h1>
      <hr />
      <h1>Part 2</h1>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button
        style={{
          marginLeft: "10px",
          backgroundColor: "royalblue",
          color: "white",
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};
// Take React Component and display it on the screen
ReactDOM.render(<App />, document.getElementById("root"));
