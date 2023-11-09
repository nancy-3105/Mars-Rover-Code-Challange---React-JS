import React from "react";
import { render } from "@testing-library/react";
import { getByText, queryByText } from "@testing-library/jest-dom";
import Rover from "./Rover";

describe("Rover component", () => {
  test("renders Rover component with default props", () => {
    const { container } = render(<Rover />);

    // Verify that the component renders with the default props
    expect(queryByText(container, /🛦/)).toBeInTheDocument();
  });

  test("renders Rover component with specified facing direction", () => {
    const { getByText } = render(<Rover facing="N" />);
    // Verify that the component renders with the specified facing direction
    expect(getByText(/🛦/).classList.contains("N")).toBe(true);
  });

  test("renders Rover component as a ghost", () => {
    const { getByText } = render(<Rover ghost />);

    // Verify that the component renders as a ghost
    expect(getByText(/🛦/).classList.contains("ghost")).toBe(true);
  });

  test("renders Rover component with specified facing direction and as a ghost", () => {
    const { getByText } = render(<Rover facing="E" ghost />);

    // Verify that the component renders with the specified facing direction and as a ghost
    expect(getByText(/🛦/).classList.contains("E")).toBe(true);
    expect(getByText(/🛦/).classList.contains("ghost")).toBe(true);
  });
});
