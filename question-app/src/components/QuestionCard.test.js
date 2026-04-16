import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import QuestionCard from "./QuestionCard";

describe("QuestionCard Component", () => {

  const mockProps = {
    index: 0,
    questions: [
      { id: 1, question: "Pet name?" },
      { id: 2, question: "Birth city?" },
    ],
    selected: "",
    onChange: jest.fn(),
    onAnswerChange: jest.fn(),
    selectedQuestions: [],
    hideAnswers: false,
    answer: ""
  };

  //Calls onChange when selecting question
  test("calls onChange when selecting question", () => {
    render(<QuestionCard {...mockProps} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "1" } });

    expect(mockProps.onChange).toHaveBeenCalledWith(0, "1");
  });

  //Calls onAnswerChange when typing
  test("calls onAnswerChange when typing answer", () => {
    render(<QuestionCard {...mockProps} />);

    const input = screen.getByPlaceholderText("answer");
    fireEvent.change(input, { target: { value: "dog" } });

    expect(mockProps.onAnswerChange).toHaveBeenCalledWith(0, "dog");
  });

  //Hides answer when hideAnswers is true
  test("input type becomes password when hideAnswers is true", () => {
    render(<QuestionCard {...mockProps} hideAnswers={true} />);

    const input = screen.getByPlaceholderText("answer");
    expect(input.type).toBe("password");
  });

  //Filters out already selected questions
  test("filters out already selected questions", () => {
    render(
      <QuestionCard
        {...mockProps}
        selectedQuestions={[1]} // already selected
      />
    );

    const options = screen.getAllByRole("option");

    // Should NOT include id 1 (except if selected)
    const optionTexts = options.map(opt => opt.textContent);

    expect(optionTexts).not.toContain("Pet name?");
  });

});