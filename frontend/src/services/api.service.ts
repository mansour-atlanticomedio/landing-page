import { ContactProps } from "@/types/Contact.type";
import { DocumentationProps } from "@/types/Documentation.type";
import { InscriptionProps } from "@/types/inscription.type";

const API_URI: string = '/api'; 

export async function sendEmail(data : InscriptionProps) {
    
    try {
        const response = await fetch(`${API_URI}/send-email`, {
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

export async function sendDocumentation(formData: FormData) {
  try {
    const response = await fetch(`${API_URI}/send-documentation`, {
      method: 'POST',
      body: formData, 
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error en la petición');
    }

    return await response.json();
  } catch (error) {
    console.error("Error al enviar:", error);
    throw error;
  }
}

export async function sendMessage(data : ContactProps) {
    
    try {
        const response = await fetch(`${API_URI}/send-message`, {
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
        console.error("Error al enviar el mensaje:", error);
        throw error;
    }
}