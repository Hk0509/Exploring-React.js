import "./App.css";
import { useCount } from "./custom-hooks/useCount";

function App() {
  const { value, Increment, Decrement, Reset } = useCount();
  // const changeVal = () => {
  //   return setValue(value - 1);
  // };
  return (
    <div className="App">
      <button onClick={Decrement}> Decrement </button>
      <button onClick={Reset}> Reset </button>
      <button onClick={Increment}> Increment </button>
      <h1>{value}</h1>
    </div>
  );
}

export default App;
