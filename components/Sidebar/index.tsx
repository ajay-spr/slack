import { ChatMeta } from "@/types";
import OrgDetails from "./OrgDetails";
import SidebarSection from "./SidebarSection";

type SidebarProps = {
  chats: ChatMeta[];
  activeChatId: null | string;
  onAction: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ chats, activeChatId, onAction }) => {
  const channelsList = chats.filter((chat) => chat.isChannel);
  const dmList = chats.filter((chat) => !chat.isChannel);

  return (
    <div className="h-screen p-2 bg-blue-500 sticky top-0">
      <OrgDetails />
      <SidebarSection
        title="Channels"
        chats={channelsList}
        activeChatId={activeChatId}
        onAction={onAction}
      />
      <SidebarSection
        title="Direct Messages"
        chats={dmList}
        activeChatId={activeChatId}
        onAction={onAction}
      />
    </div>
  );
};

export default Sidebar;
