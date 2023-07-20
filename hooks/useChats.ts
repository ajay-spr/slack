import { ChatMeta } from "@/types";
import { useState } from "react"

const useChats = (userId: string) => {
    const [activeChatId, setActiveChatId] = useState<null | string>(null)
    const allChats: ChatMeta[] = [
        {
          id: "1",
          title: "general",
          isChannel: true,
          users: ["Erling Haaland", "Leo Messi", "Kylian Mbappe"],
        },
        {
          id: "2",
          isChannel: false,
          title: "Peaky Blinders",
          users: ["Ajay Yadav", "Oliver Queen", "Thomas Shelby"],
        },
        {
          id: "3",
          isChannel: true,
          title: "discussions",
          users: ["Erling Haaland", "Leo Messi", "Ajay Yadav", "Oliver Queen"],
        },
        {
          id: "4",
          isChannel: false,
          users: ["Leo Messi"],
        },
      ];
      
    const onAction = () => {
    }

    return {activeChatId, allChats, onAction}
}

export default useChats