const fs = require("fs");

const { promises: fsPromises } = fs;
// synchronous
const inputText = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(inputText);
const outputText = `This is all about avocado: ${inputText}.`;
fs.writeFileSync("./txt/output.txt", outputText, "utf-8");

// asynchronous (callbacks)
function asyncWithCallbacks() {
    fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
        fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
            fs.writeFile(`./txt/final.txt`, data2, (err) => {
                fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
                    fs.appendFile("./txt/final.txt", data3, "utf-8", (err) => {
                        console.log("File processing finished");
                    });
                });
            });
        });
    });
}
asyncWithCallbacks();
console.log("Loading...");

// asynchronous (async/await)
async function asyncWithPromises() {
    const data1 = await fsPromises.readFile("./txt/start.txt", "utf-8");
    const data2 = await fsPromises.readFile(`./txt/${data1}.txt`, "utf-8");
    await fsPromises.writeFile("./txt/final.txt", data2, "utf-8");
    const data3 = await fsPromises.readFile("./txt/append.txt", "utf-8");
    await fsPromises.appendFile("./txt/final.txt", data3, "utf-8");
    console.log("File processing finished.");
}

asyncWithPromises();
console.log("Loading...");
