import { ChatMeta } from "@/types";
import OrgDetails from "./OrgDetails";
import SidebarSection from "./SidebarSection";

type SidebarProps = {
  chats: ChatMeta[];
  activeChatId: null | string;
};

const Sidebar: React.FC<SidebarProps> = ({ chats }) => {
  const channelsList = chats.filter((chat) => chat.isChannel);
  const dmList = chats.filter((chat) => !chat.isChannel);

  return (
    <div className="h-screen p-2 bg-blue-500 sticky top-0">
      <OrgDetails />
      <SidebarSection title="Channels" chats={channelsList} />
      <SidebarSection title="Direct Messages" chats={dmList} />
    </div>
  );
};

export default Sidebar;
