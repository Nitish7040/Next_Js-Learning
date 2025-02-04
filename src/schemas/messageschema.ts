 import {z} from 'zod';

    export const messageSchema = z.object({
        id: z.string(),
        message: z.string(),
        timestamp: z.string(),
    });