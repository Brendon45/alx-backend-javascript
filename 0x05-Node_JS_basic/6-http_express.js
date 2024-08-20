/*
  This code sets up a basic HTTP server using Express.js.
  - The server listens on the specified port (1245).
  - It defines a single GET route for the root path ('/'), which responds with the text "Hello Holberton School!".
  - The server is started and listens for incoming connections, logging a message once it's running.

  The server is also exported as a module for potential reuse or testing.
*/
const express = require('express');

const PORT = 1245;

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;