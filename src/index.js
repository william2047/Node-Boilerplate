const express = require('express');
const app = express();

const port = process.env.PORT || 60000

app.get('/', (req, res) => {
  res.send('All is good!');
});

app.listen(port)
