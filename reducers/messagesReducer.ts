import { MessagesAction, MessagesActionType, MessagesState, TMessage } from "@/types";
import { generateMessages } from "@/utils/generateMessages";

export const messagesReducer = (state: MessagesState, action: MessagesAction) => {
    switch (action.type) {
      case MessagesActionType.INITIALIZE_MESSAGES:
        return {
          ...state,
          isLoading: action.payload.isLoading,
          messages: action.payload.messages
        };
      
      case MessagesActionType.LOAD_MORE:
          // load more messages
          const newMessages:TMessage[] = generateMessages(50, action.payload.before)
          return {
            ...state,
            messages: [...state.messages, ...newMessages]
          }
        
      case MessagesActionType.SEND_MESSAGE:
        return {
          ...state,
          messages: [action.payload.message ,...state.messages]
        }

      default:
        return state;
    }
  };
