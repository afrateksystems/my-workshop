import React from "react";
const QuestionCard = ({ index, questions, selected, onChange,onAnswerChange,selectedQuestions,hideAnswers,answer}) => {
  return (
    <div >
      <label>Questions:  </label>
      <select value={selected} onChange={(e) => onChange(index, e.target.value)}>
        <option value="">select your question</option>
        {questions.filter((q) => !selectedQuestions.includes(q.id) || q.id === selected).map((q) => (<option key={q.id} value={q.id}>{q.question}</option>
        ))}
      </select>
      <br></br>
      <input  placeholder="answer" type={hideAnswers ? "password" : "text"} value={answer} onChange={(e) => onAnswerChange(index, e.target.value)}></input>
      <input type="textbox" placeholder="ConfirmAnswer"></input>
      <br></br>
    </div>
    
  );
};
export default QuestionCard;