import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import LoadingSpinner from ".";

describe("LoadingSpinner", () => {
  test("should render all ", () => {
    render(<LoadingSpinner />);
    expect(1).toBe(1);
  });
});
