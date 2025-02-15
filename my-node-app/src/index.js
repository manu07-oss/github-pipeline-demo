const express = require('express');
const app = express();
const port = 3000; // Changed port to 3000 to avoid conflict with Jenkins

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});