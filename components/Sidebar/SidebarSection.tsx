import { ChatMeta } from "@/types";

type SidebarSectionProps = {
  title: string;
  chats: ChatMeta[];
  activeChatId: string | null;
  onAction: () => void;
};

const MAX_TITLE_LENGTH = 30;

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  chats,
  activeChatId,
  onAction,
}) => {
  const getTitle = (chat: ChatMeta) => {
    if (chat.isChannel) return "#" + chat.title;
    let title = "";
    chat.users.forEach((user) => (title += ", " + user));
    title = title.slice(2);
    if (title.length > MAX_TITLE_LENGTH) {
      title = title.slice(0, MAX_TITLE_LENGTH);
      title += "...";
    }
    return title;
  };
  return (
    <div className="my-4">
      <span className="uppercase text-sm text-blue-900">{title}</span>
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`cursor-pointer pl-4 rounded hover:bg-blue-400/30 px-2 py-1 ${
            activeChatId == chat.id ? "bg-blue-600" : "bg-transparent"
          }`}
        >
          {getTitle(chat)}
        </div>
      ))}
    </div>
  );
};

export default SidebarSection;
