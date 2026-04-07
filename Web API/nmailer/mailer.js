require('dotenv').config()
const nodemailer = require("nodemailer")
const mailer = async() => {
    const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    });
    try {
        await transporter.verify();
        console.log("Server is ready to take our messages");
    } catch (err) {
        console.error("Verification failed:", err);
    }
    async function sendSampleMessage(){
        try {
            const info = await transporter.sendMail({
                from: `${process.env.SMTP_USER}`,
                to: "justinbientalahib@gmail.com",
                subject: "Hello",
                text: "Hello world?",
                html: "<b>Hello world?</b>",
            });

            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        } catch (err) {
            console.error("Error while sending mail:", err);
        }
    }
    sendSampleMessage()
}
module.exports = mailer