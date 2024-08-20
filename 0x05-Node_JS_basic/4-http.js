/*
  This code sets up a basic HTTP server using Node.js.
  The server listens on the specified port and hostname,
  and responds with "Hello Holberton School!" to any incoming requests.

  - PORT: The port number on which the server listens.
  - HOST_NAME: The hostname or IP address the server binds to.
  - The server responds with a status code of 200 (OK) and plain text content.

  The server is also exported as a module for potential reuse or testing.
*/

const http = require('http');

const PORT = 1245;
const HOST_NAME = '127.0.0.1';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(PORT, HOST_NAME, () => {
  console.log(`Server running at http://${HOST_NAME}:${PORT}`);
});

module.exports = app;