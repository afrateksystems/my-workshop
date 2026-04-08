import React from "react";
const QuestionCard = ({ index, questions, selected, onChange,selectedQuestions}) => {
  return (
    <div >
      <label>Questions:  </label>
      <select value={selected} onChange={(e) => onChange(index, e.target.value)}>
        <option value="">select your question</option>
        {questions
        .filter((q) => !selectedQuestions.includes(q.id) || q.id === selected)
        .map((q) => (<option key={q.id} value={q.id}>{q.question}</option>
        ))}
      </select>
    </div>
  );
};
export default QuestionCard;