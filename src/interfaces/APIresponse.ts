import {Message} from "@/models/User"

export interface APIresponse{
    success: boolean;
    Message: string;
    isAcceptingMessages?:boolean;
    messages?:Array<Message>

}