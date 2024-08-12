import Greeting from "./Greeting";

function App() {
  const userName = "Tanveer";
  return (
    <>
      <Greeting />
      <h1>
        This is the React Project created by {userName} Hussain using{" "}
        <i>npm create vite@latest</i>.
      </h1>
    </>
  );
} // {userName} is evaluated expression and we can use it in JSX but the expression to be evaluated like (if(condition){console.log(etc)}), can't be used

export default App;
