const nodemailer = require("nodemailer");

const { config } = require('./api/config/config');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.smtpEmail,
    pass: config.smtpPassword,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"👻" <${config.smtpEmail}>`, // sender address
    to: `${config.smtpTo}`, // list of receivers
    subject: "Correo nuevo", // Subject line
    text: "Usando Nodemailer", // plain text body
    html: "<b>Hello world!</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

sendMail();
