
import { ContactProps } from '@/types/contact.type'
import { DocumentationProps } from '@/types/documentation.type'
import { InscriptionProps } from '@/types/inscription.type'
import axios from 'axios'

const API_URL: string = 'localhost:8080'

export async function createInscription<InscriptionProps>(data: InscriptionProps) {
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

export async function sendDocumentation<DocumentationProps>(data: DocumentationProps) {
    const endpoint: string = '/documentation'
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