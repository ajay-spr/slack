import { chats } from "@/db";
import { ChatMetaData } from "@/types";
import { UDeBruyne, UHaaland, UKane, UMbappe, UMessi, UNeymar, URonaldo, USalah } from "@/utils/generateUsers";
import { useState } from "react"

export enum ChatActionType {
    UPDATE_ACTIVE_CHAT_ID
}


const useChats = (userId: string) => {
    const [activeChatId, setActiveChatId] = useState<null | string>(null)
   
    const allChats: ChatMetaData[] = chats

    const onAction = (type: ChatActionType, payload: any) => {
        switch(type) {
            case ChatActionType.UPDATE_ACTIVE_CHAT_ID:
                // do here
                setActiveChatId(payload.id)
                break
            default:
                break
        }
    }

    return {activeChatId, allChats, onAction}
}

export default useChats