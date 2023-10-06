import "./App.css";
import { useState, useContext, useEffect } from "react";
import { useToggle } from "./components/useToggle";

//Rules of hooks:
//Should start with "use" like "use"State, "use"Effect.
//Should be inside a component
//Highest level of component (Can't be inside a function)

function App() {
  const [showText, toggle] = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}>{showText ? "Hide Text" : "Show Text"}</button>
      {showText && <h1> Visible </h1>}
    </div>
  );
}

export default App;
