const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Form</title></head>");
        res.write(
            "<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Send</button></form></body>"
        );
        res.write("</html>");
        //   process.exit();
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        fs.writeFileSync("message.txt", "Loream ipsum");
        res.writeHead(302, {
            Location: "/",
        });
        return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Message</title></head>");
    res.write("<body><h1>Hello, world!</h1></body>");
    res.write("</html>");
});

server.listen(9000);
