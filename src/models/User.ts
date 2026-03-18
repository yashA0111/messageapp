import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Document{ //only for type safety during coding so i donot make any mistake
    content: String;
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({ 
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
});

export interface User extends Document{
    Name: String
    username: String;
    email: String;
    password: String;
    verifyCode: String;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[]
}

const UserSchema: Schema<User> = new Schema({
    Name:{
        Type: String,
        required: [true, "Name is required"],
        maxlength: [30, "The name must be within 30 characters"]
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true       
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        lower: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a vaild Email"] // regex shortnotes: (^,$) anchors for start & end, + -> one or more
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        minlength: [6, "Password must be at least 6 characters"]
    },
    verifyCode: {
        type: String,
        required: [true, "Verification code is required"]
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "verify code expiry is required"],
        default: Date.now()
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: false
    },
    messages: {
        type: [MessageSchema]
    }
});

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User",UserSchema)

export default UserModel;