const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/feedback", (req, res) => {
  console.log(req.body);
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    to: req.body.email,
    from: process.env.GMAIL_USERNAME,
    subject: "Thanks for your valueable feedback",
    html: `<html>
      <head>
      <title></title>
      </head>
      <body>
        <h1>Thanks for your valueable feedback</h1>                     
      </body>
      </html>
      `,
  };
  let mailOptions2 = {
    to: process.env.GMAIL_USERNAME,
    from: process.env.GMAIL_USERNAME,
    subject: "Feedback",
    html: `<html>
      <head>
      <title></title>
      </head>
      <body>
        <h1>${req.body.email}</h1>    
        <h3>${req.body.feedback}</h3>                 
      </body>
      </html>
      `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      transporter.sendMail(
        mailOptions2,
        (err,
        (info) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).send({ error: false, msg: "sent" });
          }
        }),
      );
    }
  });
});

module.exports = router;
