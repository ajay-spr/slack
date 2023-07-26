import { ChatActionType, ChatMetaData } from "@/types";
import { getTitle } from "@/utils/getChatTitle";
import { memo } from "react";

type SidebarSectionProps = {
  title: string;
  chats: ChatMetaData[];
  activeChatId: string | null;
  onAction: (action: any) => void;
};

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  chats,
  activeChatId,
  onAction,
}) => {
  return (
    <div className="my-4">
      <span className="uppercase text-sm text-white/50">{title}</span>
      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() =>
            onAction({
              type: ChatActionType.UPDATE_ACTIVE_CHAT_ID,
              payload: { id: chat.id },
            })
          }
          className={`cursor-pointer pl-4 rounded hover:bg-slackBlue/80 px-2 py-1 ${
            activeChatId == chat.id ? "bg-slackBlue" : "bg-transparent"
          }`}
        >
          {getTitle(chat)}
        </div>
      ))}
    </div>
  );
};

export default memo(SidebarSection);
