/**
 * Created by Charlie on 3/12/2017.
 */

const userEmail = process.env.EMAIL || '';
const emailPassword = process.env.EMAIL_PASSWORD || '';

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: userEmail,
    pass: emailPassword
  }
});


/**
 * Send Email method
 * @param {string} text - email body message.
 * @param {Object} from - Config `from` email.
 * @param {string} from.fromName - name of sender.
 * @param {string} from.fromEmail - email of sender.
 */
const sendEmail = (text, from = {}) => {

  const { fromName, fromEmail } = from;

  if (!userEmail || !emailPassword) {
    console.warn('Email hasn\'t been configured properly');
    return;
  }


  const mailOptions = {
    from: fromName,
    to: userEmail,
    subject: 'Resume page request',
    text: 'Messaging',
    html: `<p>${text}</p><b>From: ${fromName} ${fromEmail}</b>`
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.warn(err);
    }
    console.log('Message has been sent successfully');
    transporter.close();

  });
};

module.exports.sendEmail = sendEmail;
