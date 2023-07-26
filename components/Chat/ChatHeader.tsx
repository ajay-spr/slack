import { ChatMetaData } from "@/types";
import { getTitle } from "@/utils/getChatTitle";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ChatHeaderProps = {
  details: ChatMetaData | null;
};

const ChatHeader: React.FC<ChatHeaderProps> = ({ details }) => {
  const userString = details ? details.users.length : null;
  return details ? (
    <div className="border-b border-black/30 bg-white px-4 py-2 sticky top-0 w-full">
      <span className="text-xl font-bold">{getTitle(details, 100)}</span>
      <div className="flex gap-4 text-black/70">
        <div>
          <FontAwesomeIcon
            height={12}
            width={12}
            icon={faUser}
            className="mr-1"
          />
          {userString}
        </div>
        <div>{details.isChannel ? details.description : null}</div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ChatHeader;
