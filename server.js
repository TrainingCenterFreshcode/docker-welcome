const http = require('http');
const express = require('express');

const PORT = process.env.PORT || 5001;

const app = express();

app.use((req, res, next) => {
  return res.status(200).send('TEST');
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});