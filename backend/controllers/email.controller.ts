import type { EmailRequest, StandardResponse } from "../types/common.ts";
import type { Transporter } from "nodemailer";

const EMAIL_USER_FROM = process.env.EMAIL_USER_FROM;
const EMAIL_USER_TO = process.env.EMAIL_USER_TO;

const sendEmail = (transporter: Transporter) => {

    return async (req: EmailRequest, res: StandardResponse) => {
        const { name, lastName, email, phone, profile, comments } = req.body;

        const mailOptions = {
            from: EMAIL_USER_FROM,
            to: EMAIL_USER_TO,
            replyTo: email,
            subject: `Nueva Inscripción: ${name}`,
            text: `Nombre: ${name}\nApellido: ${lastName}\nEmail: ${email}\nTeléfono: ${phone}\nPerfil: ${profile}\nComentarios: ${comments}`
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: "Enviado con éxito" });
        } catch (error: any) {
            console.error("Error en SMTP:", error);
            return res.status(500).json({ 
                error: `No se pudo enviar: ${error.message}` 
            });
        }
    };
};

export default sendEmail;