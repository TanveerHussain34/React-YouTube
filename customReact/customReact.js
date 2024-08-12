function customRender(reactElement, mainContainer) {
  // Not an Optimized Way
  // const domElement = document.createElement(reactElement.type);
  // domElement.innerHTML = reactElement.child;
  // domElement.setAttribute("href", reactElement.props.href);
  // domElement.setAttribute("target", reactElement.props.target);
  // mainContainer.appendChild(domElement);

  // Optimized Way
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.child;
  for (const prop in reactElement.props) {
    if (prop === "child") continue; // if the child is inside the properties object
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  child: "Click Me",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
