import React, { useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard";
import "./App.css";
function App() {
  const [questions, setQuestions] = useState([]);
  const [hideAnswers, setHideAnswers] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState(["","","","",""]);
   const [questionsData, setQuestionsData] = useState([
    { questionId: "", answer: "", confirmAnswer: ""   },
    { questionId: "", answer: "" , confirmAnswer: ""  },
    { questionId: "", answer: "" , confirmAnswer: ""  },
    { questionId: "", answer: "" , confirmAnswer: ""  },
    { questionId: "", answer: "" , confirmAnswer: ""  },
  ]);
  const [errors, setErrors] = useState(["", "", "", "", ""]);
  const handleAnswerChange = (index, value) => {
  const updated = [...questionsData];
  updated[index].answer = value;
  updated[index].questionId = selectedQuestions[index]; 
  setQuestionsData(updated);
  const newErrors = validate(selectedQuestions, updated);
  setErrors(newErrors);
};
const handleConfirmAnswerChange = (index, value) => {
  const updated = [...questionsData];
  updated[index].confirmAnswer = value;
  setQuestionsData(updated);
  const newErrors = validate(selectedQuestions, updated);
  setErrors(newErrors);
};
  const validate = (questions, answers) => {
  const errors = ["", "", "", "", ""];

  questions.forEach((q, i) => {
    if (!q) {
      errors[i] = "Please select a question.";
    } else if (!answers[i].answer.trim()) {
      errors[i] = "Please enter an answer.";
    } else if (answers[i].answer.trim().length < 3) {
      errors[i] = "Answer must be at least 3 characters.";
    } else if (!answers[i].confirmAnswer.trim()) {
      errors[i] = "Please confirm your answer.";
    } else if (answers[i].answer !== answers[i].confirmAnswer) {
      errors[i] = "Answers do not match.";
    }
  });

  return errors;
};
  const handleChange = (index, value) => {
    const updatedQuestions = [...selectedQuestions];
    updatedQuestions[index] = Number(value);
    const updatedAnswers = [...questionsData];
    updatedAnswers[index] = { questionId: Number(value), answer: "" , confirmAnswer: ""};
    setSelectedQuestions(updatedQuestions);
    setQuestionsData(updatedAnswers);
    const newErrors = validate(updatedQuestions, updatedAnswers);
    setErrors(newErrors);
  };
  const handleCheckboxChange = (e) => {
  setHideAnswers(e.target.checked);
};
 const handleSubmit = () => {
  const payload = questionsData.map(q => ({
    questionId: q.questionId,
    answer: q.answer,
  }));

  fetch("http://localhost:5000/submit-answers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to submit answers");
      return res.json();
    })
    .then((data) => {
      console.log("Submitted successfully:", data);
    })
    .catch((err) => console.error(err));
};
  useEffect(() => {
  fetch("http://localhost:5000/questions") 
    .then(Response => Response.json())
    .then(data => setQuestions(data))
    .catch(err => console.error("Failed to load questions", err));
}, []);
const isFormValid = selectedQuestions.every(q => q) &&
  questionsData.every(q => q.answer.trim().length >= 3 && q.confirmAnswer.trim().length > 0 && q.answer === q.confirmAnswer);
  return (
    <div className="App">
      <h2>Security Questions</h2>
      {selectedQuestions.map((selected, index) => (
        <QuestionCard
          key={index}
          index={index}
          questions={questions}
          selected={selected}
          onChange={handleChange}
          onAnswerChange={handleAnswerChange}
          onConfirmAnswerChange={handleConfirmAnswerChange} 
          selectedQuestions={selectedQuestions.filter((_, i) => i !== index)}
          hideAnswers={hideAnswers}
          answer={questionsData[index].answer}
          confirmAnswer={questionsData[index].confirmAnswer}
          error={errors[index]}
        />
      ))}
     <div className="checkbox-container">
     <label>Hide Answers:</label><input type="checkbox" checked={hideAnswers} onChange={handleCheckboxChange}></input>
     </div>
     <button onClick={handleSubmit} disabled={!isFormValid}>Submit</button>
    </div>
  );
}
export default App;