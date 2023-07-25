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

export enum ChatDetailsActionType {
    INITIALIZE_CHAT_DETAILS
}

export type ChatAction = {
    type: ChatActionType,
    payload: any
}

export type ChatDetailsAction = {
    type: ChatDetailsActionType,
    payload: any
}

export type ChatState = {
    activeChatId: string | null,
    allChats: ChatMetaData[]
}

export type ChatDetailsState = {
    details: ChatMetaData | null
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