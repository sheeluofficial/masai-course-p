
const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "c4921ef7f35442", // generated ethereal user
      pass: "43bc58316adc26", // generated ethereal password
    },
  });

  module.exports = transporter