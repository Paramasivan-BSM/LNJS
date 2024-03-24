const { error } = require("console");
const fs = require("fs");
fs.readFile("../CoreModule/A.txt", "utf-8", (error, data) => {
  console.log(data);
  console.log(error);

  fs.readFile(`../CoreModule/${data}.txt`, "utf-8", (error1, data1) => {
    console.log(data1);
  });
  let Content =
    "Hi Folks!,Paramasivan This Side I Want Become A BlockChain Engineer";
  fs.writeFile("../CoreModule/Result.txt", Content, () => {
    console.log("Written File successfull!");
  });
  console.log("ABCD!");
});
