import logo from "./logo.svg";
import "./App.css";
import { Timer } from "./components/Timer";
import { Clicker } from "./components/Clicker";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter />
        <Clicker />
        <Timer />
      </header>
    </div>
  );
}

export default App;
