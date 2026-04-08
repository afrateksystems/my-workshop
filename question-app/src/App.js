import React, { useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState(["", "", ""]);
 
  const handleChange = (id, value) => {
    const updated = [...selectedQuestions];
    updated[id] = value;
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
      <h2>Questions you have to answer</h2>
      {selectedQuestions.map((selected, id) => (
        <QuestionCard
          key={id}
          index={id}
          questions={questions}
          selected={selected}
          onChange={handleChange}
        />
      ))}
      
    </div>
  );
}

export default App;