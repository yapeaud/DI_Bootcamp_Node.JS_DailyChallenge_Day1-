const importedNumber = require('./main');
const b = 5;

const sum = importedNumber + b;
console.log(`The sum of importedNumber + b is: ${sum}`);
// Import the http module
const http = require('http');

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response header to indicate that we're sending HTML content
  res.setHeader('Content-Type', 'text/html');

  // Get the result from Part I (you need to replace 'result_from_Part_I' with the actual result)
  const resultFromPartI = 'your_result_here';

  // Respond with an HTML paragraph and an H1
  res.end(`<p>My Module is ${resultFromPartI}</p><h1>Hi there at the frontend</h1>`);
});

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log("I'm listening");
});
