export type ChatMeta = {
    id: string
    title?: string
    isChannel: false
    users: string[]
} | {
    id: string,
    title: string,
    isChannel: true
    users: string[]
}