// Load the 'http' module to create a server
const http = require('http');

// Create an HTTP server that handles requests and sends responses
const server = http.createServer((req, res) => {
  // Set the response HTTP header (status code and content type)
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response message to the client (browser)
  res.end('Hello, World! Welcome to my first server in Node.js!');
});

// The server will listen on port 3000 and IP address 127.0.0.1 (localhost)
server.listen(3000, '127.0.0.1', () => {
  console.log('Server is running at http://127.0.0.1:3000/');
});
