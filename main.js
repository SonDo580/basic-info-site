const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const displayPage = (err, data) => {
      if (err) {
        throw err;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    };

    // if (req.url === "/contact") {
    //   fs.readFile("./contact.html", displayPage);
    // }

    // if (req.url === "/about") {
    //   fs.readFile("./about.html", displayPage);
    // }

    // fs.readFile("./index.html", displayPage);
  })
  .listen(8080);
