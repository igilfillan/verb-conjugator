import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const latinize = string => {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const isLatinMatch = (userStr, actualStr) => {
  return latinize(userStr).toLowerCase() === latinize(actualStr).toLowerCase();
};
const getMatch = (userString, actualString) => {
  let match =
    userString === actualString
      ? "full"
      : isLatinMatch(userString, actualString)
      ? "partial"
      : "none";
  return {
    type: match
  };
};

it("removes diacritics from a string", () => {
  expect(latinize("áÁéÉíÍóÓúÚñÑüÜ")).toEqual("aAeEiIoOuUnNuU");
  expect(latinize("áéíol")).toEqual("aeiol");
});

it("compares strings with diacritics removed", () => {
  expect(isLatinMatch("áéíól", "aeiól")).toEqual(true);
  expect(isLatinMatch("áéí ól", "aeiól")).toEqual(false);
  expect(isLatinMatch("aaeeIIooUunNuu", "áÁéÉíÍóÓúÚñÑüÜ")).toEqual(true);
});

it("", () => {
  expect(latinize("áÁéÉíÍóÓúÚñÑüÜ")).toEqual("aAeEiIoOuUnNuU");
  expect(latinize("áéíol")).toEqual("aeiol");
});
