import { Message } from "@/types"
import { delay } from "@/utils/delay"
import { useEffect, useState } from "react"

const useMessages = (chatId:string) => {
    const [isLoading, setIsLoading] = useState(true)
    const [messages, setMessages] = useState<null | Message[]>(null)

    useEffect(() => {
        const fetchMessages = async () => {
            const res = await delay(1000); 
            setMessages([])
            setIsLoading(false)
        }
        fetchMessages()
    }, [])
    const onAction = () => {

    }

    return {messages, isLoading, onAction}
}

export default useMessages