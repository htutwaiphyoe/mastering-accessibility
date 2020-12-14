const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Regular solution
  fs.readFile(`${__dirname}/test-file.txt`, "utf-8", (err, data) => {
    if (err) return console.log(err);
    res.end(data);
  });
  // Streams solution
  const stream = fs.createReadStream(__dirname + "/tes-file.txt");
  stream.on("data", (chunk) => {
    res.write(chunk);
  });
  stream.on("end", () => {
    res.end();
  });
  stream.on("error", (err) => {
    res.writeHead(500);
    res.end("File not found");
  });

  // Streams without backpressure
  const stream = fs.createReadStream(__dirname + "/test-file.txt");
  stream.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {});
