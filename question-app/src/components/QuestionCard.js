import React from "react";
const QuestionCard = ({ index, questions, selected, onChange }) => {
  return (
    <div >
      <label>Questions:</label>
      <select value={selected} onChange={(e) => onChange(index, e.target.value)}>
        <option value="">select your question</option>
        {questions.map((q) => (
          <option key={q.id} value={q.id}>
            {q.question}
          </option>
        ))}
      </select>
    </div>
  );
};
export default QuestionCard;