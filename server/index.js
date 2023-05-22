require("dotenv").config();
const express = require("express");
const nodeMail = require("nodemailer");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

async function mainMail(name, email, subject, message) {

    const transporter = await nodeMail.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.PASSWORD,
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
        },
    });
    const mailOption = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: "New Contact Form Submission:" + subject,
        html: `
              <p>Name: ${name}</p>
              <p>Email : ${email}</p>
              <p>Message:</p>
              <div>${message}</div>
              `,
    };
    try {
        await transporter.sendMail(mailOption);
        return Promise.resolve("Message Sent Successfully! I'll try to get back to you as soon as possible!");
    } catch (error) {
        return Promise.reject(error);
    }
}

app.get("/", (req, res) => {
    res.render(index.html);
});

app.get("/contact", (req, res) => {
    res.render(index.html);
});

app.get('*', function (req, res) {
    res.status(404).render(index.html);
});

app.post("/contact", async (req, res, next) => {
    const { yourname, youremail, yoursubject, yourmessage } = req.body;
    try {
        await mainMail(yourname, youremail, yoursubject, yourmessage);

        res.send("Message Sent Successfully! I'll try to get back to you as soon as possible!");
    } catch (error) {
        console.log(error);
        res.send(`Message Could not be Sent: ${error}`);
    }
});

app.listen(3000, () => console.log("Server is running!"));