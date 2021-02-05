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
    html: `<!doctype html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
        <title>
        </title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
          #outlook a{padding: 0;}
                .ReadMsgBody{width: 100%;}
                .ExternalClass{width: 100%;}
                .ExternalClass *{line-height: 100%;}
                body{margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}
                table, td{border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
                img{border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;}
                p{display: block; margin: 13px 0;}
        </style>
        <!--[if !mso]><!-->
        <style type="text/css">
          @media only screen and (max-width:480px) {
                      @-ms-viewport {width: 320px;}
                      @viewport {	width: 320px; }
                  }
        </style>
        <!--<![endif]-->
        <!--[if mso]> 
        <xml> 
          <o:OfficeDocumentSettings> 
            <o:AllowPNG/> 
            <o:PixelsPerInch>96</o:PixelsPerInch> 
          </o:OfficeDocumentSettings> 
        </xml>
        <![endif]-->
        <!--[if lte mso 11]> 
        <style type="text/css"> 
          .outlook-group-fix{width:100% !important;}
        </style>
        <![endif]-->
        <style type="text/css">
          @media only screen and (max-width:480px) {
          
                  table.full-width-mobile { width: 100% !important; }
                  td.full-width-mobile { width: auto !important; }
          
          }
          @media only screen and (min-width:480px) {
          .dys-column-per-100 {
            width: 100.000000% !important;
            max-width: 100.000000%;
          }
          }
          @media only screen and (min-width:480px) {
          .dys-column-per-100 {
            width: 100.000000% !important;
            max-width: 100.000000%;
          }
          }
        </style>
      </head>
      <body>
        <div>
          <!--[if mso | IE]>
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
          <div style='margin:0px auto;max-width:600px;'>
            <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
              <tbody>
                <tr>
                  <td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'>
                    <!--[if mso | IE]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
    <![endif]-->
                    <div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                      <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                        <tr>
                          <td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                            <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'>
                              <tbody>
                                <tr>
                                  <td style='width:333px;'>
                                    <img alt='Welcome!' height='303' src='https://images.unsplash.com/photo-1543118141-8598f6bfbc0a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=376&q=80' style='border:0;display:block;font-size:13px;height:303px;outline:none;text-decoration:none;width:100%;' width='333' />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
          <!--[if mso | IE]>
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
          <div style='margin:0px auto;max-width:600px;'>
            <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
              <tbody>
                <tr>
                  <td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'>
                    <!--[if mso | IE]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
    <![endif]-->
                    <div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                      <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                        <tr>
                          <td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                            <div style='color:#feae39;font-family:Open Sans, Arial, sans-serif;font-size:18px;font-weight:bold;line-height:20px;text-align:center;'>
                              Bold Title Text
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                            <div style='color:#feae39;font-family:Open Sans, Arial, sans-serif;font-size:18px;line-height:20px;text-align:center;'>
                              Subtitle here
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
        </div>
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
