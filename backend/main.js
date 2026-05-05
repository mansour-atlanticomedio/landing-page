const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

const PORT = 3000;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

app.post('/send-email', async (req, res) => {
    try {
        const mailOptions = {
            from: EMAIL_USER,
            to: 'email-de-la-universidad@ejemplo.com',
            subject: `Nueva Inscripción: ${req.body.name} ${req.body.lastName}`,
            text: `Se ha recibido una nueva inscripción:\n\nNombre: ${req.body.name}\nEmail: ${req.body.email}\nPerfil: ${req.body.profile}\nComentarios: ${req.body.coments}`
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: "Guardado y enviado con éxito", data: newInscription });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error en el servidor", details: err.message });
    }
});


app.listen(PORT, () => console.log(`Backend escuchando en puerto ${PORT}`));
