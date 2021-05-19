const http = require("http");

const server = http.createServer((req, res) => {
    console.log("ok");
});

server.listen("8000", "127.0.0.1", () => {
    console.log("Server listening on port 8000");
});
