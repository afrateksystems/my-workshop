const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
app.get("/questions", (req, res) => {
  fs.readFile(path.join(__dirname, "question.json"), "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading questions.json");
    res.json(JSON.parse(data));
  });
});
app.post("/submit-answers", (req, res) => {
  const answers = req.body;
  if (!answers || Object.keys(answers).length === 0) {
    return res.status(400).json({ error: "Invalid input" });
  }
  //validation
  //must be array
  if (!Array.isArray(answers)) {
    return res.status(400).json({ error: "Answers must be an array" });
  }
  //must not be empty
  if (answers.length === 0) {
    return res.status(400).json({ error: "Answers cannot be empty" });
  }
  //validate each item using different parameters 
  for (let i = 0; i < answers.length; i++) {
    const item = answers[i];
    if (!item.questionId) {
      return res.status(400).json({ error: `Missing questionId at index ${i}` });
    }
    if (!item.answer || item.answer.trim() === "") {
      return res.status(400).json({ error: `Missing answer at index ${i}` });
    }
    if (item.answer.trim().length < 3) {
      return res.status(400).json({ error: `Answer too short at index ${i}` });
    }
  }
  //check duplicate questionIds
  const ids = answers.map(a => a.questionId);
  const uniqueIds = new Set(ids);
  if (ids.length !== uniqueIds.size) {
    return res.status(400).json({ error: "Duplicate questions selected" });
  }
  //saving it in answers.json 
  fs.writeFile(
    path.join(__dirname, "answers.json"),
    JSON.stringify(answers, null, 2),
    (err) => {
      if (err) return res.status(500).send("Failed to save answers");
      res.json({ message: "Answers saved successfully" });
    }
  );
});
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
module.exports = app;