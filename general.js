'use strict';

function range(n, m = undefined) {
  if (m === undefined) {
    return [...Array(n).keys()];
  }
  return range(m - n).map((x) => x + n);
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const zip = (A, B) => {
  return A.length <= B.length
    ? A.map((a, i) => [a, B[i]])
    : B.map((b, i) => [A[i], b]);
};

const round = (x, multiple_of = 1) => Math.round(x / multiple_of) * multiple_of;

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function lastOf(arr) {
    return arr[arr.length - 1];
}

/**
 * sort elements by some key function
 * similar to python's sort(lst, key=lambda...)
 */
function sortBy(arr, keyFunc, { ascending = true } = {}) {
    return arr.sort((a, b) => {
        const x = keyFunc(a), y = keyFunc(b);
        const result = (x < y) ? -1 : (x > y) ? +1 : 0;
        return ascending ? result : -result;
    });
}

function extractFrom(obj, keys) {
  return keys.reduce((res, key) => ((res[key] = obj[key]), res), {});
}

/**
 * "exampleString" -> "example-string"
 */
function camelToKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function h(tagName, props, ...children) {
  const element = document.createElement(tagName);

  for (const key in props) {
    if (key.startsWith("on")) {
      // for event attributes such as "onClick"
      element.addEventListener(key.toLowerCase().substring(2), props[key]);
    } else if (key in element) {
      // for special attributes such as "className"
      element[key] = props[key];
    } else {
      // for anything else such as "myCustomAttr"
      element.setAttribute(camelToKebabCase(key), props[key]);
    }
  }

  for (const child of children) {
    const node = child instanceof Node ? child : document.createTextNode(child);
    element.appendChild(node);
  }

  return element;
}

function addStyleSheet(css) {
  const styleElement = h('style', null, css);
  document.head.appendChild(styleElement);
  return styleElement;
}
