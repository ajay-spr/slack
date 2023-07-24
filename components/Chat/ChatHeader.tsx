import { ChatMetaData } from "@/types";
import { getTitle } from "@/utils/getChatTitle";

type ChatHeaderProps = {
  details: ChatMetaData | null;
};

const ChatHeader: React.FC<ChatHeaderProps> = ({ details }) => {
  return details ? (
    <div className="border-b border-black/30 px-4 py-2 fixed w-full">
      <span className="text-xl font-bold">{getTitle(details)}</span>
      <div className="flex gap-4 text-black/70">
        <div>{details.users.length} users</div>
        <div>{details.isChannel ? details.description : null}</div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ChatHeader;
