export type User = {
    id: string,
    fullName: string,
    displayName: string,
    profilePicURL?: string
}


export enum ChatActionType {
    UPDATE_ACTIVE_CHAT_ID,
    INITIALIZE_CHATS
}

export type ChatAction = {
    type: ChatActionType,
    payload: any
}

export type ChatState = {
    activeChatId: string | null,
    allChats: ChatMetaData[]
}

export type ChatMetaData = {
    id: string
    title?: string
    isChannel: false
    users: User[]
} | {
    id: string,
    title: string,
    isChannel: true,
    description: string
    users: User[]
}

type CommonMessageType = {
    from: User,
    timestamp: Date,

}

type MessageVariants = 
    {
        type: "text",
        message: string
    } | {
        type: "file",
        caption: string,
        fileURL: string 
    }

export type Message = CommonMessageType & MessageVariants