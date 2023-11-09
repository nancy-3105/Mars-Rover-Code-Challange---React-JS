import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  const { getByText, getByTestId, container } = render(<App />);

  // Ensure the main components are rendered
  expect(container.querySelector(".app-name")).toBeTruthy();
  expect(getByTestId("startPosition")).toBeTruthy();
  expect(getByTestId("commands-input")).toBeTruthy();
});

test("executes commands when Execute button is clicked", () => {
  const { getByText, getByTestId } = render(<App />);

  // Add valid start position
  fireEvent.change(getByTestId("startPosition"), { target: { value: "01N" } });

  // Add commands
  fireEvent.click(getByText(/Move/i));
  fireEvent.click(getByText(/Right/i));
  fireEvent.click(getByText(/Move/i));

  // Click Execute button
  fireEvent.click(getByText(/Execute/i));

  // Ensure the commands are passed to the Mars component for execution
  expect(getByTestId("commands-input").value).toBe("MRM");
});

test("clears commands when Clear button is clicked", () => {
  const { getByText, getByTestId } = render(<App />);

  // Add commands
  fireEvent.click(getByText(/Move/i));
  fireEvent.click(getByText(/Right/i));
  fireEvent.click(getByText(/Move/i));

  // Click Clear button
  fireEvent.click(getByText(/✖/i));

  // Ensure the commands are cleared
  expect(getByTestId("commands-input").value).toBe("");
});

test("executes commands when Execute button is clicked", async () => {
  const { getByText, getByTestId } = render(<App />);

  // Add valid start position
  fireEvent.change(getByTestId("startPosition"), { target: { value: "01N" } });

  // Add commands
  fireEvent.click(getByText(/Move/i));
  fireEvent.click(getByText(/Right/i));
  fireEvent.click(getByText(/Move/i));

  // Click Execute button
  fireEvent.click(getByText(/Execute/i));

  // Wait for state to update
  // await act(async () => {
  // Ensure the commands are passed to the Mars component for execution
  expect(getByTestId("commands-input").value).toBe("MRM");
  // });
});

test("displays error message for invalid start position", () => {
  const { getByText, getByTestId } = render(<App />);

  // Add invalid start position
  fireEvent.change(getByTestId("startPosition"), { target: { value: "55N" } });

  // Click Execute button
  fireEvent.click(getByText(/Execute/i));

  // Check for the error message in a different way
  const errorMessage = getByText((content, element) => {
    // Use a custom matcher to find the error message
    const hasText = (node) => node.textContent === "Invalid start position.";
    const nodeHasText =
      hasText(element) || Array.from(element.children).some(hasText);
    return nodeHasText;
  });

  expect(errorMessage).toBeInTheDocument();
});
