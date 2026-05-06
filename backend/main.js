const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer')


const app = express();
const upload = multer()

const PORT = 3000;
const EMAIL_USER_FROM = process.env.EMAIL_USER_FROM;
const EMAIL_USER_TO = process.env.EMAIL_USER_TO;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

app.use(cors());
app.use(express.json());

console.log("Configurando SMTP para:", EMAIL_USER_FROM);

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

app.post('/send-email', async (req, res) => {
    const { name, lastName, email, phone, profile, comments } = req.body;

    const mailOptions = {
        from: EMAIL_USER_FROM, 
        to: EMAIL_USER_TO,       
        replyTo: email, 
        subject: `Nueva Inscripción: ${name}`,
        text: `Nombre: ${name}\n
               Apellido: ${lastName}\n
               Email: ${email}\n
               Teléfono: ${phone}\n
               Perfil: ${profile}\n
               Comentarios: ${comments}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Correo enviado!')
        res.status(200).json({ message: "Enviado con éxito" });
    } catch (error) {
        console.error("Error de autenticación/envío:", error);
        res.status(500).json({ error: "No se pudo enviar", detalle: error.message });
    }
});

app.post('/send-message', async (req, res) => {
    const { name, email, about, message } = req.body;

    const mailOptions = {
        from: EMAIL_USER_FROM, 
        to: EMAIL_USER_TO,       
        replyTo: email, 
        subject: about,
        text: `Nombre: ${name}\n
               Asunto: ${about}\n
               Email: ${email}\n
               Mensaje: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Mensaje enviado!')
        res.status(200).json({ message: "Enviado con éxito" });
    } catch (error) {
        console.error("Error de autenticación/envío:", error);
        res.status(500).json({ error: "No se pudo enviar", detalle: error.message });
    }
});

app.post('/send-documentation', upload.array('files'), async (req, res) => {

    const { name, email, reference, notes } = req.body;
    const files = req.files; 

    const attachments = files.map(file => ({
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype
    }));

    const mailOptions = {
        from: EMAIL_USER_FROM,
        to: EMAIL_USER_TO,
        replyTo: email,
        subject: `Documentación de ${name} - Ref: ${reference}`,
        text: `Nombre: ${name}\nEmail: ${email}\nReferencia: ${reference}\nNotas: ${notes}`,
        attachments: attachments
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Enviado con éxito" });
    } catch (error) {
        console.error("Error al enviar mail:", error);
        res.status(500).json({ error: "No se pudo enviar el correo" });
    }
});

app.listen(PORT, () => console.log(`Backend escuchando en puerto ${PORT}`));