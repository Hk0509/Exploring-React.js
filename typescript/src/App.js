import "./App.css";
import { Person } from "./Components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Himanshu"
        email="himanshukapoor898@gmail.com"
        age={21}
        isMarried={false}
        friends={["Xyz", "Abc", "123"]}
      />
    </div>
  );
}

export default App;
