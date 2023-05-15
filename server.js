const express = require('express');
const app = express();

app.get('/headers', (req, res) => {
  const headers = req.headers;
  res.send(JSON.stringify(headers));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
