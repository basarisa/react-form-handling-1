import "./App.css";
import { useState } from "react";

function App() {
  const [displayGreetingMsg, setDisplayGreetingMsg] =
    useState("Greeting Message");
  const [inputGreeting, setInputGreeting] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">{displayGreetingMsg}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => setInputGreeting(event.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={() => setDisplayGreetingMsg(inputGreeting)}>
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
