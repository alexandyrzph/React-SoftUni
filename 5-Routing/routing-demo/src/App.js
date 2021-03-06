import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <h1>Hello React Router</h1>

      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
