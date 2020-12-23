const fs = require("fs");
module.exports.handler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<!DOCTYPE html><html><head><title>Nodejs</title></head>");
        res.write(
            "<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Send</button></form></body></html>"
        );
        return res.end();
    } else if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            // body.push(chunk.toString().split("=")[1]);
            body.push(chunk);
        });
        return req.on("end", () => {
            const bodyStr = Buffer.concat(body).toString();
            const message = bodyStr.split("=")[1];
            fs.writeFile(`${__dirname}/message.txt`, message, "utf-8", (err) => {
                res.writeHead(302, {
                    Location: "/",
                });
                return res.end();
            });
        });
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<!DOCTYPE html><html><head><title>Nodejs</title></head>");
    res.write("<body><h1>Hello, world!</h1></body></html>");
    res.end();
};
