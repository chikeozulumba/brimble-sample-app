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
  const msg = `Hello from brimble deployment. App Name: ${appName} Host: ${os.hostname()} on port ${port}\n`;
  console.log(`[${new Date().toISOString()}] ${msg}`);
  res.type("text/plain").send(msg);
});

app.listen(port, () => {
  console.log(`[${new Date().toISOString()}] listening on ${port}`);
});
