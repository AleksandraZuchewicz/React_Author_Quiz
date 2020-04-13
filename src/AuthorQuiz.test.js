import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import AuthorQuiz from "./AuthorQuiz";

test("Aythor quiz render without crushing ", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AuthorQuiz />, div);
});
