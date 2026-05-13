import type { EmailRequest, StandardResponse } from "../types/common.ts";
import type { Transporter } from "nodemailer";

const EMAIL_USER_FROM = process.env.EMAIL_USER_FROM;
const EMAIL_USER_TO = process.env.EMAIL_USER_TO;

const sendMessage = (transporter: Transporter) => {
    return async (req: EmailRequest, res: StandardResponse) => {
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
        } catch (error: any) {
            console.error("Error de autenticación/envío:", error);
            res.status(500).json({ error: `No se pudo enviar ${error.message}`, });
        }

    }
}

export default sendMessage