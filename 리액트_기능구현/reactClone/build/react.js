function createElement(tag, props, ...children) {
  if (typeof tag === "function") {
    return tag(null, props, ...children);
  }
  return {
    tag,
    props,
    children
  };
}
function renderDOM(vDom) {
  if (vDom === undefined) {
    return;
  } else if (typeof vDom === "string") {
    return document.createTextNode(vDom);
  }
  const el = document.createElement(vDom.tag);
  vDom.children.map(element => {
    return renderDOM(element);
  }).forEach(realEl => {
    el.append(realEl);
  });
  return el;
}
function render(element, container) {
  container.append(renderDOM(element));
}
export { createElement, render };