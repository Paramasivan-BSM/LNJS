const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Ask somthing", (ans) => {
  console.log(ans);
  r1.close();
});
r1.on("close", () => {
  console.log("InterFace Closed");
  process.exit(0);
});
