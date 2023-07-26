import { ChatActionType, ChatMetaData } from "@/types";
import OrgDetails from "./OrgDetails";
import SidebarSection from "./SidebarSection";
import { useMemo } from "react";

type SidebarProps = {
  chats: ChatMetaData[];
  activeChatId: null | string;
  onAction: any;
};

const Sidebar: React.FC<SidebarProps> = ({ chats, activeChatId, onAction }) => {
  const channelsList = useMemo(
    () => chats.filter((chat) => chat.isChannel),
    [chats]
  );
  const dmList = useMemo(
    () => chats.filter((chat) => !chat.isChannel),
    [chats]
  );

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
