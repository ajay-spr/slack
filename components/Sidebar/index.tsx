import { ChatMetaData } from "@/types";
import OrgDetails from "./OrgDetails";
import SidebarSection from "./SidebarSection";
import { ChatActionType } from "@/hooks/useChats";

type SidebarProps = {
  chats: ChatMetaData[];
  activeChatId: null | string;
  onAction: (type: ChatActionType, payload: any) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ chats, activeChatId, onAction }) => {
  const channelsList = chats.filter((chat) => chat.isChannel);
  const dmList = chats.filter((chat) => !chat.isChannel);

  return (
    <div className="h-screen p-2 bg-aubergine sticky top-0 text-white">
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
