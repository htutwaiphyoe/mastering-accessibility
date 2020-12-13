const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => console.log("Timer 1 Finished"));
setImmediate(() => console.log("Set Immediate 1 Finished"));

fs.readFile(`${__dirname}/test-file.txt`, "utf-8", () => {
  console.log("File Read Finished");
  setTimeout(() => console.log("Timer 2 Finished"));
  setImmediate(() => console.log("Set Immediate 2 Finished"));

  process.nextTick(() => console.log("Next tick Finished"));
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Crypto finished");

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Crypto finished");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Crypto finished");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Crypto finished");
  });
});
console.log("Top Level Code Finished");
