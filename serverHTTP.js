const http = require('http');

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Write response body
    res.end('Hello, World!\n');
});

// Define server port
const port = 3000;

// Start server and listen on defined port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
