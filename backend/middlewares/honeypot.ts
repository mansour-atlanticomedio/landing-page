import type { NextFunction } from "express";
import type { EmailRequest, StandardResponse } from "../types/common.ts";

const honeypot = () => {
    return async (req: EmailRequest, res: StandardResponse, next: NextFunction) => {
        const honeyValue = req.body.confirm_email_address;

        if (honeyValue && honeyValue.length > 0) {
            console.log('Spam detectado');
            return res.status(200).json({ message: 'Enviado con éxito' });
        }

        next(); 
    };
};

export default honeypot;