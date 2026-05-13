import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

import honeypot from "./middlewares/honeypot.ts";
import apiLimiter from "./middlewares/apiLimiter.ts";

import sendMessage from './controllers/message.controller.ts'
import sendEmail from "./controllers/email.controller.ts";

const EMAIL_USER_FROM = process.env.EMAIL_USER_FROM;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: EMAIL_USER_FROM,
        pass: EMAIL_PASSWORD
    },
    tls: {
        ciphers: 'TLSv1.2',
        rejectUnauthorized: false
    }
});

app.post('/send-email', apiLimiter, honeypot, sendEmail(transporter))

app.post('/send-message', apiLimiter, honeypot, sendMessage(transporter))

app.listen(PORT, () => console.log(`Backend escuchando en puerto ${PORT}`))