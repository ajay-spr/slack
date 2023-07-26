import { DEFAULT_USER_NOT_FOUND_TITLE, MAX_TITLE_LENGTH } from "@/constants";
import { ChatMetaData } from "@/types";
import { getUserFromId } from "./generateUsers";


export const getTitle = (chat: ChatMetaData, maxLength:number = MAX_TITLE_LENGTH) => {
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
    if (title.length > maxLength) {
      title = title.slice(0, maxLength);
      title += "...";
    }
    return title;
  };