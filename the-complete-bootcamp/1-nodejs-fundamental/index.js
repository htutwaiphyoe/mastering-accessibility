const fs = require("fs");

const inputText = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(inputText);

const outputText = `This is all about avocado: ${inputText}.`;

fs.writeFileSync("./txt/output.txt", outputText, "utf-8");
