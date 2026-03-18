import {resend} from "@/lib/resend"

import OTPEmail from "@emails/VerificationEmail"
import {APIresponse} from "@/interfaces/APIresponse"

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<APIresponse>{
    try{
        const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'messageapp | Verification Email',
      react: OTPEmail({ userName:username, otp:verifyCode }),
        });
        console.log("successful")
        return {success:true,Message:"success in sending verififcation email"}
    }
    catch(emailError){
            console.error("an error occurred", emailError);
            return {success:false,Message:"Failed to send verification email"}
    }
}