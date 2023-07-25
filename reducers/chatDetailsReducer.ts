import { ChatDetailsAction, ChatDetailsActionType, ChatDetailsState } from "@/types";

export const chatDetailsReducer = (state: ChatDetailsState, action: ChatDetailsAction) => {
    switch(action.type) {
        case ChatDetailsActionType.INITIALIZE_CHAT_DETAILS:
            return {
                ...state,
                details: action.payload.details
            }
        default:
            return state;

    }
}