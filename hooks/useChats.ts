import { chats } from "@/db";
import { chatReducer } from "@/reducers/chatReducer";
import { ChatActionType, ChatState } from "@/types";
import { useEffect, useReducer } from "react"

const initialState:ChatState = {
  activeChatId: null as null | string,
  allChats: [],
};

const useChats = (userId: string) => {
  
    const [state, dispatch] = useReducer(chatReducer, initialState);

    useEffect(() => {
        dispatch({
            type: ChatActionType.INITIALIZE_CHATS,
            payload:{chats}      
        })
    }, [userId])
  
    return {
      activeChatId: state.activeChatId,
      allChats: state.allChats,
      onAction: dispatch,
    };
  };
export default useChats