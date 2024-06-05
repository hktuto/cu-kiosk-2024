const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const port = 3000;

let base = __dirname;
if (process.resourcesPath) {
  base = path.resolve(process.resourcesPath, "../assets");
} else {
  base = path.resolve(base, "../assets");
}

const app = express();

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "app.html");
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  }
});

app.get("/assets/:filename", (req, res) => {
  const filePath = path.join(base, req.params.filename);
  if (fs.existsSync(filePath)) {
    res.sendFile(path.join(base, req.params.filename));
  } else {
    res.sendFile(path.join(__dirname, "../assets", req.params.filename));
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
