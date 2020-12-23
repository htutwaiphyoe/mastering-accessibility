const http = require("http");
const routes = require("./routes");
const server = http.createServer((req, res) => {
    routes.handler(req, res);
});

server.listen(8000);
