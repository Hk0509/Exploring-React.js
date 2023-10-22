import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const Increase = () =>{
    setCount(count+1);
  }

  return (
    <div className="App">
      <button onClick={Increase}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Set to Zero</button>
      {<h1>{count}</h1>}
    </div>
  );
}

export default App;
