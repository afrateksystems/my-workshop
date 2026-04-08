import React, { useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard";
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
    //checking the empty questions is there 
  if (selectedQuestions.some(q => !q)) {
    alert("Please select all questions.");
    return;
  }
  //Empty answers is there or not
  if (questionsData.some(q => !q.answer.trim())) {
    alert("Please answer all questions.");
    return;
  }
  // answer length is too short
  if (questionsData.some(q => q.answer.trim().length < 3)) {
    alert("Answers must be at least 3 characters long.");
    return;
  }
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
      alert("Answers submitted successfully!");
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
    <div>
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
        />
      ))}
     <label>Hide Answers:</label><input type="checkbox" checked={hideAnswers} onChange={handleCheckboxChange}></input>
     <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;