export const random = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const isObject = (value) =>
  Object.prototype.toString.call(value) === "[object Object]";

export const createElement = (tagName, props) => {
  const tag = document.createElement(tagName);

  for (const key in props) {
    if (key === "class") {
      tag.classList.add(...props[key]);
    } else {
      tag.setAttribute(key, props[key]);
    }
  }

  return tag;
};
