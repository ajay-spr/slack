import { chats } from "@/db"
import { chatDetailsReducer } from "@/reducers/chatDetailsReducer"
import { ChatDetailsActionType, ChatDetailsState, ChatMetaData } from "@/types"
import { useEffect, useReducer, useState } from "react"

const fetchDetails = (id: string) => {
    return chats.filter(chat => chat.id == id)[0]
}

const initialState: ChatDetailsState = {
    details: null
}

const useChatDetails = (id: string) => {
    const [state, dispatch] = useReducer(chatDetailsReducer, initialState)
    useEffect(() => {
        const fetchChatDetails = async () => {
            const res = fetchDetails(id)
            dispatch({type: ChatDetailsActionType.INITIALIZE_CHAT_DETAILS, payload: {details: res}})
        }
        fetchChatDetails()
    }, [id])
    return {details: state.details, dispatch}
}


export default useChatDetails