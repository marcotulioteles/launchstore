const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "31b3814a1baf32",
    pass: "4cf2e3cab7e125"
  }
})