import { ChatAction, ChatActionType, ChatState } from "@/types";

export const chatReducer = (state: ChatState, action: ChatAction) => {
    switch (action.type) {
      case ChatActionType.UPDATE_ACTIVE_CHAT_ID:
        return {
          ...state,
          activeChatId: action.payload.id,
        };
    
      case ChatActionType.INITIALIZE_CHATS:
            return {
                ...state, 
                allChats: action.payload.chats
            }
      default:
        return state;
    }
  };
