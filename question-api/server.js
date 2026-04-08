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