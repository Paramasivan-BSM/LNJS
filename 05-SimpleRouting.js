let Http = require("http");
let Fs = require("fs");

// ReadFile Using FileSystem Module
let HTML = Fs.readFileSync("../CoreModule/Template/index.html", "utf-8");
console.log(HTML);

let Server = Http.createServer((req, res) => {
  let pathUrl = req.url.toLowerCase(); // Convert the URL to lowercase for easier comparison

  if (pathUrl === "/" || pathUrl === "/home") {
    res.end(HTML.replace("{{%CONTENT%}}", "Welcome Home"));
    console.log("Home");
  } else if (pathUrl === "/about") {
    res.end(HTML.replace("{{%CONTENT%}}", "Welcome About"));
    console.log("About");
  } else if (pathUrl === "/contact") {
    res.end(HTML.replace("{{%CONTENT%}}", "Welcome Contact"));
    console.log("Contact");
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
    console.log("404");
  }
});

Server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
