import { ChatMetaData, User } from "@/types";
import { UDeBruyne, UHaaland, UKane, UMbappe, UMessi, UNeymar, URonaldo, USalah } from "@/utils/generateUsers";
import { useState } from "react"

const useChats = (userId: string) => {
    const [activeChatId, setActiveChatId] = useState<null | string>(null)
   
    const allChats: ChatMetaData[] = [
        {
          id: "1",
          title: "general",
          isChannel: true,
          description: "Our cool channel",
          users: [UMessi, USalah, URonaldo],
        },
        {
          id: "2",
          isChannel: false,
          title: "Peaky Blinders",
          users: [UHaaland, UNeymar, UDeBruyne, UMbappe],
        },
        {
          id: "3",
          isChannel: true,
          title: "discussions",
          description: "A nice little description here",
          users: [UHaaland, USalah, UDeBruyne, UKane],
        },
        {
          id: "4",
          isChannel: false,
          users: [UMessi],
        },
      ];

    const onAction = () => {
    }

    return {activeChatId, allChats, onAction}
}

export default useChats