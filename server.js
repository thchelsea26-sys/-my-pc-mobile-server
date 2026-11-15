
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "online",
    name: "My PC Mobile Server",
    version: "1.0.0"
  });
});

app.get("/localconfig.json", (req, res) => {
  const domain = process.env.RAILWAY_PUBLIC_DOMAIN;

  if (!domain) {
    return res.status(503).json({
      error: "Public domain not configured"
    });
  }

  res.json({
    serverUrl: `https://${domain}/`
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
