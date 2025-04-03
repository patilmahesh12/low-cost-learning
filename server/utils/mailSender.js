const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MAIL_USER || "novacops.rcpit@gmail.com",
        pass: process.env.MAIL_PASS || "cvrwlvkrohgbqmse",
      },
    });

    let info = await transporter.sendMail({
      from:  "StudyNotion || CodeHelp - by Babbar",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);

    return info;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
