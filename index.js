import React from "react";
import ReactDom  from "react-dom";


ReactDom.render(<h1>Hello World</h1>,document.getElementById("root"));
ReactDom.render(
  <div>
    <h1>Hello World</h1>
    <p>This is paragraph</p>
    <h2>Bye World</h2>
  </div>,
  document.getElementById("root")
);

