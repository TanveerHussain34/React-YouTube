import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Our Custom Tree Syntax
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   child: "Click Me",
// };

// const anotherElement = (
//   <a href="https://google.com" target="_black">
//     Click Me to visit Google
//   </a>
// );

// React Tree Syntax
const reactElement = React.createElement(
  "h1",
  null,
  React.createElement(
    "a",
    { href: "https://github.com/TanveerHussain34", target: "_blank" },
    "GitHub Profile"
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    {reactElement}
  </>
);
