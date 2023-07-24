import { ChatMetaData } from "./types";
import { UDeBruyne, UHaaland, UKane, UMbappe, UMessi, UNeymar, URonaldo, USalah } from "./utils/generateUsers";

export const chats: ChatMetaData[] = [{
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
  {
    id: "5",
    isChannel: true,
    description: "the best channel",
    title: "music",
    users: [UMessi, UMbappe, URonaldo, USalah, UHaaland]
  }
]

