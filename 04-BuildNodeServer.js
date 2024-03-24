const Http = require("http");
const Fs = require("fs");

const Port = 1000;

// ReadFile Using FileSystem Module
const Html = Fs.readFileSync("./Template/index.html", "utf-8");

//Create A WebServer
const Server = Http.createServer((req, res) => {
  res.end(Html);
  console.log("New Request Received From Client");
});

//Start A WebServer
Server.listen(Port, "127.0.0.1", () => {
  console.log("Server is Running Port  " + Port);
});
