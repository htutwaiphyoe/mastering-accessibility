const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node.js Basic</title></head>");
  res.write("<body><h1>Hello, world!</h1></body>");
  res.write("</html>");
  //   process.exit();
  res.end();
});

server.listen(9000);
