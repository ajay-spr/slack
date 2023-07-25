import { DEFAULT_USER_NOT_FOUND_TITLE, MAX_TITLE_LENGTH } from "@/constants";
import { ChatMetaData } from "@/types";
import { getUserFromId } from "./generateUsers";


export const getTitle = (chat: ChatMetaData) => {
    if (chat.isChannel) return "#" + chat.title;
    if(chat.title) return chat.title
    let title = "";
    chat.users.forEach((userId) => {
      const user = getUserFromId(userId)
      if(!user){
        return DEFAULT_USER_NOT_FOUND_TITLE
      }
      title += ", " + user.fullName});

    title = title.slice(2);
    if (title.length > MAX_TITLE_LENGTH) {
      title = title.slice(0, MAX_TITLE_LENGTH);
      title += "...";
    }
    console.log(chat, title)
    return title;
  };