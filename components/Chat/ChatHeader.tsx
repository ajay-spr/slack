import { ChatMetaData } from "@/types";
import { getTitle } from "@/utils/getChatTitle";

type ChatHeaderProps = {
  details: ChatMetaData | null;
};

const ChatHeader: React.FC<ChatHeaderProps> = ({ details }) => {
  const userString = details
    ? details.users.length > 1
      ? details.users.length + " users"
      : null
    : null;
  return details ? (
    <div className="border-b border-black/30 bg-white px-4 py-2 sticky top-0 w-full">
      <span className="text-xl font-bold">{getTitle(details)}</span>
      <div className="flex gap-4 text-black/70">
        <div>{userString}</div>
        <div>{details.isChannel ? details.description : null}</div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ChatHeader;
