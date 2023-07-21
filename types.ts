export type User = {
    id: string,
    fullName: string,
    displayName: string,
    profilePicURL?: string
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