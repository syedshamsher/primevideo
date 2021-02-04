const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const mediaRoute = require("./routes/media");
const userRoute = require("./routes/users");
const feedbackRoute = require("./routes/feedback");
const fs = require("fs");
const path = require("path");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB();
app.use("/api/medias", mediaRoute);
app.use("/api", userRoute);
app.use("/", feedbackRoute);

app.get("/video/:name", function (req, res) {
  const title = req.params.name;
  console.log("video");
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Range Headers missing");
  }
  const videoPath = path.join(__dirname, `/video/${title}.mp4`);
  const videoSize = fs.statSync(path.join(__dirname, `/video/${title}.mp4`))
    .size;
  const CHUNK_SIZE = 10 ** 6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, { start, end });
  videoStream.pipe(res);
});

app.listen(8001, () => {
  console.log("The server is running on port 8001");
});
