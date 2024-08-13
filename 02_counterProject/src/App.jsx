import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0); // useState is a hook that we used because counter + 1 was not changing the state of UI. Now click on one button is changing the state of UI at multiple places

  // let counter = 0;

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    } else {
      alert("Maximum counter value reached!");
    }
    console.log("+1 Clicked", counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    } else {
      alert("Minimum counter value reached!");
    }
    console.log("-1 Clicked", counter);
  };

  return (
    <>
      <h1>Counter Project using React</h1>

      <h3>0 and 20 are minimum and maximum counter values respectively</h3>

      <a href="https://react.dev" target="_blank">
        {counter}
      </a>

      <h1>{counter}</h1>

      <p>{counter}</p>

      <button onClick={addValue}>🔼</button>

      <button onClick={removeValue}>🔽</button>
    </>
  );
}

export default App;
