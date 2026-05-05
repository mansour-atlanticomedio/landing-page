const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

const PORT = 3000;
const EMAIL_UNI = process.env.EMAIL_USER;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS  
    }
});

app.post('/send-email', async (req, res) => {
    const { name, email, coments } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER, 
        to: process.env.EMAIL_USER,  
        replyTo: email,       
        subject: `Nueva Inscripción: ${name}`,
        text: `El alumno ${name} con correo ${email} dice: ${coments}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Enviado con éxito" });
    } catch (error) {
        console.error("Error de autenticación/envío:", error);
        res.status(500).json({ error: "No se pudo enviar", detalle: error.message });
    }
});

app.listen(PORT, () => console.log(`Backend escuchando en puerto ${PORT}`));