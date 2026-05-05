
import { ContactProps } from '@/types/contact.type'
import { DocumentationProps } from '@/types/documentation.type'
import { InscriptionProps } from '@/types/inscription.type'
import axios from 'axios'

const API_URL: string = 'http://localhost:3000'

export async function createInscription(data: InscriptionProps) {
    const endpoint: string = '/inscription'
    try {
        const response = await axios.post(
            `${API_URL}${endpoint}`,
            data
        )
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(Response.error)
    }
}

export async function sendDocumentation(data: DocumentationProps) {
    const endpoint: string = '/documentation'
    try {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        if (data.reference) formData.append('reference', data.reference);
        if (data.notes) formData.append('notes', data.notes);
        
        for (let i = 0; i < data.files.length; i++) {
            formData.append('files', data.files[i]);
        }

        const response = await axios.post(
            `${API_URL}${endpoint}`,
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        )
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(Response.error)
    }
}

export async function sendMessage(data: ContactProps) {
    const endpoint: string = '/contact'
    try {
        const response = await axios.post(
            `${API_URL}${endpoint}`,
            data
        )
        console.log(response.data)
    } catch (error) {
        console.log(Response.error)
    }
}