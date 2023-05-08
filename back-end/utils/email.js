const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  //1) Create a transporter
  const transporter = nodemailer.createTransport({
    //defining service
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  //2)Define the email options
  const mailOptions = {
    from: "DevLearn <devlearn41@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  //3)Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
