const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Hello from server built in Node.js");
});

server.listen(3000);
