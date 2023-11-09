import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for "toHaveClass" matcher
import Rover from "./Rover";

describe("Rover component", () => {
  test('should have classname "rover N ghost" when facing is N and ghost is true', () => {
    // Arrange
    const props = {
      facing: "N",
      ghost: true
    };

    // Act
    const { container } = render(<Rover {...props} />);
    const spanElement = container.querySelector("span");

    // Assert
    expect(spanElement).toHaveClass("rover");
    expect(spanElement).toHaveClass("N");
    expect(spanElement).toHaveClass("ghost");
  });

  // Add more test cases if needed
});
