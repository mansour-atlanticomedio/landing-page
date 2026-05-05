export async function sendEmail() {
    const response = await fetch('/send-email', {
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
