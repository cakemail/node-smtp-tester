// Cakemail username/pass
const username = "";
const password = "";

// From address; make sure this address matches a verified Sender in your account
const from = "";

// Recipient email address
const to = "";

// Email subject
const subject = "This is a test";

// Email contents
const text = "This is a test";

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.cakemail.dev",
    port: 587,
    auth: {
        user: username,
        pass: password,
    },
    debug: true,
    logger: true,
});

message = {
    from: from,
    to: to,
    subject: subject,
    text: text,
};

transporter.sendMail(message, function (err, info) {
    if (err) {
        console.error(err);
    } else {
        console.log(info);
    }
});
