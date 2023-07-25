import { TMessage } from "@/types";
import { users } from "./generateUsers";

const generateId = () => {
    return String(Math.floor(Math.random()*10000))
}

const generateMessage = () => {
    const messages = [
        "Hi, how are you guys doing?",
        "Woah, this is cool :o",
        "hahahaaa",
        "haha thanks",
        "i'm doing great today",
        "why?",
        "oh, nice!",
        "i don't think so buddy"
    ]
    const idx = Math.floor(Math.random()*(messages.length));
    return messages[idx]
}

const generateTimeStamp = (range: {from: number, to: number} = {from: 25, to: 28}):Date => {
    const day = Math.floor(Math.random()*30)
    if(day>range.to || day < range.from) return generateTimeStamp(range)

    return new Date(2023, 6, day)
}

const generateFromUser = () => {
    const idx = Math.floor(Math.random()*10)
    return users[idx].id
}

const createMessage: () => TMessage = () => {
    let message:TMessage;
    if(Math.random() > 0.8){
        message = {
            id:generateId(),
            type: "file",
            from: generateFromUser(),
            caption: "imageFinal.png",
            fileURL: "https://www.google.com",
            timestamp: generateTimeStamp()
        }
    } else {
        message= {
            id: generateId(),
            type: "text",
            from: generateFromUser(),
            message: generateMessage(),
            timestamp: generateTimeStamp()
        }
    }
    return message
}

export const generateMessages = (n: number) => {
    return Array(n).fill(null).map(message => createMessage())    
}