// Reading And Writting File Using Node js
const fs = require("fs");
let info = fs.readFileSync("./FactAboutNode.txt", "utf-8");
console.log(info);

let content =
  "Hello, Paramasivan This Side i want Become A BlockChain engineer";
fs.writeFileSync("./A.txt", content);
