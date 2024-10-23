import { useState } from "react";
import "./App.css";

function App() {
  const [updateMassage, setUpdateMassage] = useState("Greeting Message");
  const [inputMassage, setInputMassage] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">{updateMassage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputMassage}
          onChange={(event) => {
            setInputMassage(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button onClick={() => setUpdateMassage(inputMassage)}>
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
