export async function sendEmail() {
    const API_URI: string = 'http://192.168.0.157:3000'; 
    
    try {
        const response = await fetch(`${API_URI}/send-email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Name test',
                subject: 'Hello from frontend',
                text: 'This is a test email.'
            })
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