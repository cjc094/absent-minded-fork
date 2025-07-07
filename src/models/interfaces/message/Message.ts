import MsgSender from "@/models/enums/MsgSender";

interface Message {
    text: string;
    sender: MsgSender;
    attachmentUrl?: string; 
}

export default Message;
