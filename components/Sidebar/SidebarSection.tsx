import { ChatActionType } from "@/hooks/useChats";
import { ChatMetaData } from "@/types";

type SidebarSectionProps = {
  title: string;
  chats: ChatMetaData[];
  activeChatId: string | null;
  onAction: (type: ChatActionType.UPDATE_ACTIVE_CHAT_ID, payload: any) => void;
};

const MAX_TITLE_LENGTH = 30;

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  chats,
  activeChatId,
  onAction,
}) => {
  const getTitle = (chat: ChatMetaData) => {
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
  return (
    <div className="my-4">
      <span className="uppercase text-sm text-white/50">{title}</span>
      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() =>
            onAction(ChatActionType.UPDATE_ACTIVE_CHAT_ID, { id: chat.id })
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

export default SidebarSection;
