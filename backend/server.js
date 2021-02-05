const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const mediaRoute = require("./routes/media");
const userRoute = require("./routes/users");
const feedbackRoute = require("./routes/feedback");
const Users = require("./models/users");
const fs = require("fs");
const path = require("path");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB();
app.use("/api/medias", mediaRoute);
app.use("/api", userRoute);

app.get("/video/:name", function (req, res) {
  console.log("video",req.headers)
  const title = req.params.name;  
  const range = req.headers.range;
  console.log(title,range)
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


app.post('/order', (req, res) => {
  let amount = req.body.order.amount
  try {
      const options = {
          amount: amount * 100,
          currency: 'INR',
          receipt: uuidv4(),
          payment_capture: 0
      }
      instance.orders.create(options, (err, order) => {
          if (err) {
              return res.status(500).json({ message: "Something went wrong" })
          }
          return res.status(200).json(order)
      })
  } catch (err) {
      return res.status(500).json({
          message: 'Something went wrong'
      })
  }
})

app.post("/capture/:paymentId", (req, res) => {
  const user_id = req.body.user_id;
  const newOrder = req.body.order;
  try {
      return request(
          {
              method: "POST",
              url: `https://${process.env.RAZOR_PAY_KEY_ID}:${process.env.RAZOR_PAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
              form: {
                  amount: 10 * 100,
                  currency: "INR",
              },
          },
          async function (error, response, body) {
              if (error) {
                  return res.status(500).json({
                      message: "Something Went Wrong",
                  });
              }
              Users.findOne({ _id: user_id }, { subscription: 1, _id: 0 })
                .then((data) => {
                    console.log( data )
                    if(data) {
                        Users.findOneAndUpdate({ _id : user_id} , {subscription: true})
                        .then(() => console.log("done"))
                        .catch(() => console.log("notDone"))
                        return res.status(200).json(data);
                    } else {
                        res.status(400).json("User Not Found");
                    }
                    })
                .catch((err) => {
                    console.log(err)
                  return (
                    res.status(404).json("Error:" + err)
                  )
                }); 
          });
  } catch (err) {
      return res.status(500).json({
          message: "Something Went Wrong",
      });
  }
});

app.listen(8001, () => {
  console.log("The server is running on port 8001");
});
