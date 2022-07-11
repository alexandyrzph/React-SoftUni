import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const usernameChanged = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange={usernameChanged} value={username} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
