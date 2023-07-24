import { chats } from "@/db"
import { ChatMetaData } from "@/types"
import { delay } from "@/utils/delay"
import { useEffect, useState } from "react"

const fetchDetails = (id: string) => {
    return chats.filter(chat => chat.id == id)[0]
}

const useChatDetails = (id: string) => {
    const [details, setDetails] = useState<null | ChatMetaData>(null)
    useEffect(() => {
        const fetchChatDetails = async () => {
            const res = fetchDetails(id)
            setDetails(res)
        }
        fetchChatDetails()
    }, [id])
    return {details}
}

export default useChatDetails