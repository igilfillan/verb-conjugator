import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { latinize, isLatinMatch, matchType } from "./utils/utils";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("removes diacritics from a string", () => {
  expect(latinize("áÁéÉíÍóÓúÚñÑüÜ")).toEqual("aAeEiIoOuUnNuU");
  expect(latinize("áéíol")).toEqual("aeiol");
});

it("compares strings with diacritics removed", () => {
  expect(isLatinMatch("áéíól", "aeiól")).toEqual(true);
  expect(isLatinMatch("áéí ól", "aeiól")).toEqual(false);
  expect(isLatinMatch("aaeeIIooUunNuu", "áÁéÉíÍóÓúÚñÑüÜ")).toEqual(true);
});

it("get the match type", () => {
  expect(matchType("áéíol", "blah")).toEqual("none");
  expect(matchType("áéíol", "aeiol")).toEqual("partial");
  expect(matchType("áéíol", "áéíol")).toEqual("full");
});
