import React, { useState, createElement as e } from "react";

function App() {
  const [count, setCount] = useState(0);
  // return <h1>Hello react</h1>;
  // return React.createElement("h1", {}, "Hello from JSX");
  return e("div", { className: "container" }, [
    e("h1", { className: "font-bold", key: 1 }, `Test message ${count}`),
    e(
      "button",
      {
        className: "py-2 px-4 border",
        key: 2,
        onClick: () => setCount(count + 1),
      },
      "Click"
    ),
  ]);
}
