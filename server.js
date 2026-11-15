
const express = require("express");
const app = express();

const SERVER_URL =
  "https://my-pc-mobile-server-production.up.railway.app/";

app.get("/", (req, res) => {
  res.json({
    status: "online",
    name: "My PC Mobile Server",
    version: "1.0.0"
  });
});

app.get("/localconfig.json", (req, res) => {
  res.json({
    serverUrl: SERVER_URL
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
