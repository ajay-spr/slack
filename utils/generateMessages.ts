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

const getRandomNumberLessThan = (n:number) => {
    return Math.floor(Math.random()*n)
}

const generateTimeStamp = (before: Date):Date => {
    const day = getRandomNumberLessThan(31)
    let beforeDay = before.getDate()
    const beforeMonth = beforeDay > 2 ? before.getMonth() : before.getMonth()-1;
    beforeDay = beforeDay > 2 ? beforeDay : 30
    const afterDay = beforeDay-2;
    if(day>=beforeDay || day < afterDay) return generateTimeStamp(before)
    const hour = getRandomNumberLessThan(24);
    const minutes = getRandomNumberLessThan(60)
    const seconds = getRandomNumberLessThan(60)
    return new Date(2023, beforeMonth, day, hour, minutes, seconds)
}

const generateFromUser = () => {
    const idx = Math.floor(Math.random()*10)
    return users[idx].id
}

const createMessage: (before: Date) => TMessage = (before) => {
    let message:TMessage;
    if(Math.random() > 0.8){
        message = {
            id:generateId(),
            type: "file",
            from: generateFromUser(),
            caption: "imageFinal.png",
            fileURL: "https://www.google.com",
            timestamp: generateTimeStamp(before)
        }
    } else {
        message= {
            id: generateId(),
            type: "text",
            from: generateFromUser(),
            message: generateMessage(),
            timestamp: generateTimeStamp(before)
        }
    }
    return message
}

export const generateMessages = (n: number, before:Date = new Date()) => {
    return Array(n).fill(null).map(message => createMessage(before))    
}