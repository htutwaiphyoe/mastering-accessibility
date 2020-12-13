const EventEmitter = require("events");
const http = require("http");
/************* Own Custom Events **************/

class Sale extends EventEmitter {
  constructor() {
    super();
  }
}
const sale = new Sale();

sale.on("new", () => {
  console.log("New sale!");
});

sale.on("new", (name) => {
  console.log("Customer: " + name);
});
sale.emit("new", "HWP");

/************* Node Module Events **************/
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("New Request: " + req.url);
  res.end("New Request" + req.url);
});

server.on("close", (req, res) => {
  console.log("Sever shutting down  ");
});
server.listen(8000, "127.0.0.1", () => {});
