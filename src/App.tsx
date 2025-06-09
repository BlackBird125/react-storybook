import React from "react";
import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="space-y-4">
          <Button
            label="Primary Button"
            variant="primary"
            onClick={() => console.log("Primary clicked")}
          />
          <Button
            label="Secondary Button"
            variant="secondary"
            onClick={() => console.log("Secondary clicked")}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
