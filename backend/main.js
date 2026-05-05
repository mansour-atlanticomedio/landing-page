const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

const PORT = 3000;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

app.use(cors());
app.use(express.json());

console.log("Configurando SMTP para:", EMAIL_USER);

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: EMAIL_USER, 
        pass: EMAIL_PASSWORD  
    }
});

app.post('/send-email', async (req, res) => {
    const { name, lastName, email, phone, profile, comments } = req.body;

    const mailOptions = {
        from: email, 
        to: EMAIL_USER,        
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

app.listen(PORT, () => console.log(`Backend escuchando en puerto ${PORT}`));