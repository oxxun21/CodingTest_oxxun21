/* @jsx createElement */
import { createElement, render } from "./react.js";

function Title() {
  return (
    <div>
      <h1 className="title">hello</h1>
      <strong>ee</strong>
    </div>
  )
}

render(<Title />, document.querySelector("#root"));