import { messagesReducer } from "@/reducers/messagesReducer"
import { MessagesActionType, TMessage } from "@/types"
import { delay } from "@/utils/delay"
import { generateMessages } from "@/utils/generateMessages"
import { useEffect, useId, useReducer } from "react"

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

    const onSendMessage = (text: string, userId: string) => {
        console.log("Message sent: ", text)
        const newMessage:TMessage = {
            type: "text",
            from: userId,
            id: userId + text.slice(0, 5),
            message: text,
            timestamp: new Date() 
        }
        // send this new message to API or localStorage and update state
        dispatch({
            type: MessagesActionType.SEND_MESSAGE,
            payload: {
                message: newMessage
            }
        })
    }

    return {messages:state.messages, isLoading:state.isLoading, onLoadMore, onSendMessage}
}

export default useMessages