let http = require("http");

let server = http.createServer((req, res) => {
  let pathUrl = req.url.toLowerCase(); // Convert the URL to lowercase for easier comparison

  if (pathUrl === "/" || pathUrl === "/home") {
    res.end("Welcome Home Page");
    console.log("Home");
  } else if (pathUrl === "/about") {
    res.end("Welcome To About Page");
    console.log("About");
  } else if (pathUrl === "/contact") {
    res.end("Welcome To Contact Section");
    console.log("Contact");
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
    console.log("404");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
