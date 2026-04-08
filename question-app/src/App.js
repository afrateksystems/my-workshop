import React, { useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard";
function App() {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState(["","","","",""]);
  const handleChange = (index, value) => {
    const updated = [...selectedQuestions];
    updated[index] = Number(value);
    setSelectedQuestions(updated);
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
          selectedQuestions={selectedQuestions.filter((_, i) => i !== index)}
        />
      ))}
     <label>Hide Answers:</label><input type="checkbox"></input>
     <button>Submit</button>
    </div>
  );
}

export default App;