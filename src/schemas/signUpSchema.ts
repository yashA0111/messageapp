import * as z from "zod"

export const usernameValidation = z.string()
    .min(2, "username must be 2 characters")
    .max(20,"Username must be no more than 20 characters")
    .regex(/^[a-xA-Z0-9_]+$/, "no special characters allowed")


export const signUpSchema = z.object({
    
    email: z.email({message: `Invalid email address`})
    .toLowerCase()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {message: "must be a valid email"}),
    password: z.string().min(8, {message: "password must be at least 8 characters"})
        .regex(/[A-Z]/, {message: "password must contain at least one uppercase letter"})
    .regex(/[a-z]/, {message: "password must contain at least one lowercase letter"})
    .regex(/[0-9]/, {message: "password must contain at least one number"})
    .regex(/[@$!%*?&]/, {message: "password must contain at least one special character"}),
    username: usernameValidation
});
