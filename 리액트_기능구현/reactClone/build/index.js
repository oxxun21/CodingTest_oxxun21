/* @jsx createElement */
import { createElement, render } from "./react.js";
function Title() {
  return createElement("div", null, createElement("h1", {
    className: "title"
  }, "hello"), createElement("strong", null, "ee"));
}
render(createElement(Title, null), document.querySelector("#root"));