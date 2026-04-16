const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('');
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});