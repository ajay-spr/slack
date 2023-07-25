import { messagesReducer } from "@/reducers/messagesReducer"
import { Message, MessagesActionType } from "@/types"
import { delay } from "@/utils/delay"
import { useEffect, useReducer, useState } from "react"

const initialState = {
    isLoading: true,
    messages: []
}

const useMessages = (chatId:string) => {
    const [state, dispatch] = useReducer(messagesReducer, initialState)

    useEffect(() => {
        const fetchMessages = async () => {
            await delay(1000);
            dispatch({type: MessagesActionType.INITIALIZE_MESSAGES, payload:{isLoading: false, messages: []}}) 
        }
        fetchMessages()
    }, [])

    return {messages:state.messages, isLoading:state.isLoading, dispatch}
}

export default useMessages