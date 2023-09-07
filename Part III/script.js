// Import the http module
const http = require('http');

// Import the getCurrentDateTime function from main.js
const getCurrentDateTime = require('./main');

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response header to indicate that we're sending HTML content
  res.setHeader('Content-Type', 'text/html');

  // Get the current date and time using the exported function
  const dateTime = getCurrentDateTime();

  // Respond with an HTML paragraph displaying the date and time
  res.end(`<p>Current Date and Time: ${dateTime}</p>`);
});

// Listen on port 8080
const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
