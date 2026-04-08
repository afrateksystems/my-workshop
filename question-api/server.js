const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 5000;
app.use(cors());
app.get("/questions", (request, response) => {
  fs.readFile("question.json", "utf8", (err, data) => {
    if (err) return response.status(500).send("Error reading questions.json");
    response.send(data);
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});