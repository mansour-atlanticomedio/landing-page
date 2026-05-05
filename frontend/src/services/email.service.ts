import { InscriptionProps } from "@/types/inscription.type";

export async function sendEmail(data : InscriptionProps) {
    const API_URI: string = '/api/send-email'; 
    
    try {
        const response = await fetch(API_URI, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Error en la petición');
        }

        const result = await response.json();
        console.log("Éxito:", result);
        return result;

    } catch (error) {
        console.error("Error al enviar email:", error);
        throw error;
    }
}