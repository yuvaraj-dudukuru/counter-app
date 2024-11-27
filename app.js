import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  // Fetch the counter value from the backend
  const fetchCounter = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/counter");
      const data = await response.json();
      setCounter(data.counter);
    } catch (error) {
      console.error("Error fetching counter:", error);
    }
  };

  // Update the counter on the backend
  const updateCounter = async (newValue) => {
    try {
      await fetch("http://localhost:4000/api/counter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: newValue }),
      });
      setCounter(newValue);
    } catch (error) {
      console.error("Error updating counter:", error);
    }
  };

  // Reset the counter
  const resetCounter = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/counter/reset", {
        method: "POST",
      });
      const data = await response.json();
      setCounter(data.counter);
    } catch (error) {
      console.error("Error resetting counter:", error);
    }
  };

  // Fetch counter on component mount
  useEffect(() => {
    fetchCounter();
  }, []);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter">{counter}</div>
      <div className="buttons">
        <button onClick={() => updateCounter(counter + 1)}>Increment</button>
        <button onClick={() => updateCounter(counter - 1)}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
};

export default App;
