require("dotenv").config();
const express = require("express");
const os = require("os");

const appName = process.env.APP_NAME || "sample-brimble-app";
const port = Number(process.env.PORT) || 3000;

const app = express();

app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.get("/", (_req, res) => {
  res.type("text/plain").send(
    `Hello from brimble deployment. App Name: ${appName} Host: ${os.hostname()} on port ${port}\n`,
  );
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
