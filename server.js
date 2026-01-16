const express = require("express");
const fetch = require("node-fetch");
const { StringStream } = require("scramjet");

const app = express();

app.get("/api/proxy", async (req, res) => {
  const url = req.query.url;

  if (!url) return res.status(400).send("Missing url");
  if (!url.startsWith("http://") && !url.startsWith("https://"))
    return res.status(400).send("Invalid url");

  const response = await fetch(url);

  res.status(response.status);

  response.headers.forEach((value, name) => {
    if (name.toLowerCase() === "content-length") return;
    res.setHeader(name, value);
  });

  const stream = new StringStream(response.body);

  stream.pipe(res);
});

app.listen(3000);
