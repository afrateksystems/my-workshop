import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
//Mocking data before , when each tests are called 
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          { id: 1, question: "Your pet name?" },
          { id: 2, question: "Your school?" },
        ]),
    })
  );
});
describe("App Component", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });
  //Renders heading
  test("renders Security Questions heading", () => {
    render(<App />);
    expect(screen.getByText("Security Questions")).toBeInTheDocument();
  });
  //Loads questions from API
  test("loads and displays questions", async () => {
    render(<App />);
    const question = await screen.findAllByText("Your pet name?");
    expect(question[0]).toBeInTheDocument();
  });
  //User selects question and types answer
  test("user can select question and type answer", async () => {
    render(<App />);
    const selects = await screen.findAllByRole("combobox");
    fireEvent.change(selects[0], { target: { value: "1" } });
    const inputs = screen.getAllByPlaceholderText("answer");
    fireEvent.change(inputs[0], { target: { value: "dog" } });
    expect(inputs[0].value).toBe("dog");
  });
  //Checkbox toggles hideAnswers when checked
  test("toggle hide answers checkbox", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
  //Submit validation - if the form is empty 
  test("shows alert if submitting empty form", () => {
    window.alert = jest.fn();
    render(<App />);
    fireEvent.click(screen.getByText("Submit"));
    expect(window.alert).toHaveBeenCalledWith("Please select all questions.");
  });

});