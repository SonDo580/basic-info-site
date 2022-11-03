const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("....");
    }

    res.end();
  })
  .listen(8080);
