const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require('dotenv').config(); 

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER, // Use environment variable for the recipient email
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error); // Log the error for debugging
      res.json({ code: 500, status: "Message Sending Failed", error: error.message });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
