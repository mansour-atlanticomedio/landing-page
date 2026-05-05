export async function sendEmail() {
    const API_URI : string = 'localhost:3000'
    const response = await fetch(API_URI+'/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            to: process.env.EMAIL_UNIVERSITY,
            subject: 'Hello from frontend',
            text: 'This is a test email.'
        })
    });

    const result = await response.json();
    console.log(result);
}