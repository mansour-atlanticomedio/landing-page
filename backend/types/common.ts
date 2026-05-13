import type { Request, Response } from 'express';

export interface EmailBody {
    name: string;
    lastName: string;
    email: string;
    about?: string,
    message?: string,
    phone: string;
    profile: string;
    comments: string;
    confirm_email_address: string;
}

export type EmailRequest = Request<{}, {}, EmailBody>;
export type StandardResponse = Response<{ message?: string; error?: string }>;