import { MAX_TITLE_LENGTH } from "@/constants";
import { ChatMetaData } from "@/types";

export   const getTitle = (chat: ChatMetaData) => {
    if (chat.isChannel) return "#" + chat.title;
    let title = "";
    chat.users.forEach((user) => (title += ", " + user.fullName));
    title = title.slice(2);
    if (title.length > MAX_TITLE_LENGTH) {
      title = title.slice(0, MAX_TITLE_LENGTH);
      title += "...";
    }
    return title;
  };