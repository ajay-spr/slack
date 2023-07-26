import { MessagesAction, MessagesActionType, MessagesState, TMessage } from "@/types";

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
          const newMessages:TMessage[] = []
          return {
            ...state,
            messages: [...state.messages, newMessages]
          }

      default:
        return state;
    }
  };
