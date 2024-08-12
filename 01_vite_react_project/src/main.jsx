import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Chai aur React</h1>
    </div>
  );
}

// Our Custom Tree Syntax
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   child: "Click Me",
// };

const anotherElement = (
  <a href="https://google.com" target="_black">
    Click Me to visit Google
  </a>
);

const userName = "Tanveer";

// React Tree Syntax
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Go to Google | ",
  userName // variable
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
