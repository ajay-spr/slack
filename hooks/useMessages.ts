import { messagesReducer } from "@/reducers/messagesReducer"
import { MessagesActionType } from "@/types"
import { delay } from "@/utils/delay"
import { generateMessages } from "@/utils/generateMessages"
import { useEffect, useReducer } from "react"

const initialState = {
    isLoading: true,
    messages: []
}

const useMessages = (chatId:string) => {
    const [state, dispatch] = useReducer(messagesReducer, initialState)

    useEffect(() => {
        const fetchMessages = async () => {
            await delay(1000);
            dispatch({type: MessagesActionType.INITIALIZE_MESSAGES, payload:{isLoading: false, messages: generateMessages(40)}}) 
        }
        fetchMessages()
    }, [])

    const onLoadMore = (before: Date) => {
        dispatch({
          type: MessagesActionType.LOAD_MORE,
          payload: { before },
        });
      };

    const onSendMessage = (text: string) => {
        console.log("Message sent: ", text)
    }

    return {messages:state.messages, isLoading:state.isLoading, onLoadMore, onSendMessage}
}

export default useMessages