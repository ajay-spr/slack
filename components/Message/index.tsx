import { TMessage } from "@/types";
import { getUserFromId } from "@/utils/generateUsers";
import { memo } from "react";

type MessageProps = {
  message: TMessage;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  const user = getUserFromId(message.from);
  const getTimeString = (timestamp: Date) => {
    return timestamp.toLocaleString();
  };
  return message.type == "text" ? (
    <div className="w-full rounded px-3 py-2 flex gap-2">
      <div className="bg-slackBlue h-10 w-10 rounded"></div>
      <div>
        <div className="flex gap-2 items-baseline">
          <span className="font-bold">{user?.fullName}</span>
          <span className="text-sm text-slate-400">
            {getTimeString(message.timestamp)}
          </span>
        </div>
        <div>{message.message}</div>
      </div>
    </div>
  ) : null;
};

export default memo(Message);
