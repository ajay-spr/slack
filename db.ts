import { Message } from "./types";
import { ChatMetaData } from "./types";
import { users } from "./utils/generateUsers";

export const chats: ChatMetaData[] = [{
    id: "1",
    title: "general",
    isChannel: true,
    description: "Our cool channel",
    users: [ users[1].id, users[8].id, users[9].id],
  },
  {
    id: "2",
    isChannel: false,
    title: "Peaky Blinders",
    users: [users[5].id, users[2].id, users[3].id, users[1].id, users[8].id, users[9].id],
  },
  {
    id: "3",
    isChannel: true,
    title: "discussions",
    description: "A nice little description here",
    users: [users[3].id, users[4].id, users[6].id, users[7].id],
  },
  {
    id: "4",
    isChannel: false,
    users: [users[1].id, users[2].id, users[3].id],
  },
  {
    id: "5",
    isChannel: true,
    description: "the best channel",
    title: "music",
    users: [users[1].id, users[2].id, users[5].id, users[6].id]
  }
]