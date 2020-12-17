const fs = require("fs");
const requestHandler = (req, res) => {
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
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });

        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.appendFile("message.txt", message, "utf-8", (err) => {
                res.writeHead(302, {
                    Location: "/",
                });
                return res.end();
            });
        });
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Message</title></head>");
    res.write("<body><h1>Hello, world!</h1></body>");
    res.write("</html>");
};

module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     test: "Some text",
// };

// module.exports.handler = requestHandler;
// module.exports.test = "Some text";

// exports.handler = requestHandler;
// exports.test = "Some text";
