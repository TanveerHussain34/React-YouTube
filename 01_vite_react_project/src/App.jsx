import Greeting from "./Greeting";

function App() {
  const userName = "Tanveer Hussain";
  return (
    <>
      <Greeting />
      <h1>
        This is the React Project created by {userName} using &ldquo;npm create
        vite@latest&rdquo;.
      </h1>
    </>
  );
} // {userName} is evaluated expression and we can use it in JSX but the expression to be evaluated like (if(condition){console.log(etc)}), can't be used

export default App;
