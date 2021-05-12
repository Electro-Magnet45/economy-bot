const express = require("express");

const server = express();

server.all("/", (req, res) => {
  res.send("Running!");
});

function keepAlive() {
  server.listen(5000, () => {
    console.log("Server ready.");
  });
}

module.exports = keepAlive;
