import React, { useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard";
import "./App.css";
function App() {
  const [questions, setQuestions] = useState([]);
  const [hideAnswers, setHideAnswers] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState(["","","","",""]);
   const [questionsData, setQuestionsData] = useState([
    { questionId: "", answer: ""  },
    { questionId: "", answer: ""  },
    { questionId: "", answer: ""  },
    { questionId: "", answer: ""  },
    { questionId: "", answer: ""  },
  ]);
  const [errors, setErrors] = useState(["", "", "", "", ""]);
  const handleAnswerChange = (index, value) => {
  const updated = [...questionsData];
  updated[index].answer = value;
  updated[index].questionId = selectedQuestions[index]; 
  setQuestionsData(updated);
};
  const handleChange = (index, value) => {
    const updatedQuestions = [...selectedQuestions];
    updatedQuestions[index] = Number(value);
    const updatedAnswers = [...questionsData];
    updatedAnswers[index] = { questionId: Number(value), answer: "" };
    setSelectedQuestions(updatedQuestions);
    setQuestionsData(updatedAnswers);
  };
  const handleCheckboxChange = (e) => {
  setHideAnswers(e.target.checked);
};
 const handleSubmit = () => {
  const newErrors = ["", "", "", "", ""];

  // Check empty questions
  selectedQuestions.forEach((q, i) => {
    if (!q) newErrors[i] = "Please select a question.";
  });

  // Check empty answers
  questionsData.forEach((q, i) => {
    if (!q.answer.trim()) {
      newErrors[i] = "Please enter an answer.";
    } else if (q.answer.trim().length < 3) {
      newErrors[i] = "Answer must be at least 3 characters.";
    }
  });

  setErrors(newErrors);

  // Stop if any error exists
  if (newErrors.some(err => err)) return;

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
          selectedQuestions={selectedQuestions.filter((_, i) => i !== index)}
          hideAnswers={hideAnswers}
          answer={questionsData[index].answer}
          error={errors[index]}
        />
      ))}
     <div className="checkbox-container">
     <label>Hide Answers:</label><input type="checkbox" checked={hideAnswers} onChange={handleCheckboxChange}></input>
     </div>
     <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;