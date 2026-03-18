import * as z from "zod";


 export const MessageSchema = z.object({
    content : z.string()
    .min(10, {message: 'content must atleast be 10 characters long'})
    .max(500, {message: 'cotent can\'t be more longer than 500 characters'})
 })