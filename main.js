const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
