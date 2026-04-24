require("dotenv").config();
const http = require("http");

const appName = process.env.APP_NAME || "sample-brimble-app";
const port = process.env.PORT || 3000;

http
  .createServer((_, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
      `Hello from brimble deployment. App Name: ${appName} Host: ${require("os").hostname()} on port ${port}\n`,
    );
  })
  .listen(port, () => console.log(`listening on ${port}`));
