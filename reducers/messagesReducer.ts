import { MessagesAction, MessagesActionType, MessagesState } from "@/types";

export const messagesReducer = (state: MessagesState, action: MessagesAction) => {
    switch (action.type) {
      case MessagesActionType.INITIALIZE_MESSAGES:
        return {
          ...state,
          isLoading: action.payload.isLoading,
          messages: action.payload.messages
        };

      default:
        return state;
    }
  };
