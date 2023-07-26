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

export enum MessagesActionType {
    INITIALIZE_MESSAGES,
    LOAD_MORE
}

export enum ChatDetailsActionType {
    INITIALIZE_CHAT_DETAILS
}

export type ChatAction = {
    type: ChatActionType,
    payload: any
}

export type MessagesAction = {
    type: MessagesActionType,
    payload: any
}

export type MessagesState = {
    isLoading: boolean,
    messages: TMessage[]   
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
    users: string[]
} | {
    id: string,
    title: string,
    isChannel: true,
    description: string
    users: string[]
}

type CommonMessageType = {
    id: string,
    from: string,
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

export type TMessage = CommonMessageType & MessageVariants