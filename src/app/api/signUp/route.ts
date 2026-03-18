import dbconnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs";
import {getExpiryDate} from "@/functions/utility";

import  {sendVerificationEmail} from "@/functions/sendVerificationEmail";

export async function POST(request: Request){
    await dbconnect();
    
    
    try{
        const {Name, username, email, password} = await request.json();
        const whenOtherUsernameExists = await UserModel.findOne({
        username,
        isVerified:true
    });
    if (whenOtherUsernameExists){
        return Response.json({
            success:false,
            message: "Username is taken"
        }, {status:400});
    }
    const whenOtherSameEmailExists = await UserModel.findOne({
        email
    });
    const verifyCode= Math.floor(100000+Math.random()*900000).toString();
    if (whenOtherSameEmailExists){
        if (whenOtherSameEmailExists.isVerified){
        return Response.json({
            success:false,
            message: "A user with the given email already exists"
            }, {status:400});
        }else{
            whenOtherSameEmailExists.username=username;
            whenOtherSameEmailExists.Name=Name;
            const hashedPassword= await bcrypt.hash(password,10);
            whenOtherSameEmailExists.password = hashedPassword;
            whenOtherSameEmailExists.verifyCode= verifyCode;
            whenOtherSameEmailExists.verifyCodeExpiry= getExpiryDate(1);
            await whenOtherSameEmailExists.save();
        }

    }else{
        const hashedPassword= await bcrypt.hash(password,10);
        const codeExpiry = getExpiryDate(1);
        const newUser= new UserModel({
                Name,
                username,
                email,
                password:hashedPassword,
                verifyCode,
                verifyCodeExpiry:codeExpiry,
                isVerified: false,
                isAcceptingMessage: true,
                messages: []
        });
        await newUser.save();
    }
    const emailResponse= await sendVerificationEmail(email, username, verifyCode);
    if (!emailResponse.success) {
        return Response.json({
            success:false,
            message: "An error occurred while sending the verification email. Please try again later."
        }, {status:500});
    }
    return Response.json({
        success:true,
        message: "User registered successfully. Please check your email for the verification code."
    });
}
    catch(error){
        console.error("Error during sign up:", error);
        return Response.json({
            success:false,
            message: "An error occurred during sign up. Please try again later."
        }, {status:500});

    }

    
}