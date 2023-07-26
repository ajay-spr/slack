import { TMessage } from "@/types";
import { getUserFromId } from "@/utils/generateUsers";
import { getExtensionFromFileName } from "@/utils/getExtensionFromFileName";
import { memo } from "react";

type MessageProps = {
  message: TMessage;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  const user = getUserFromId(message.from);
  const getTimeString = (timestamp: Date) => {
    return timestamp.toLocaleString();
  };
  return (
    <div className="w-full rounded px-3 py-2 flex gap-2">
      <div className="bg-slackBlue h-10 w-10 rounded shrink-0"></div>
      <div className="max-w-[70%]">
        <div className="flex gap-2 items-baseline">
          <span className="font-bold">{user?.fullName}</span>
          <span className="text-sm text-slate-400">
            {getTimeString(message.timestamp)}
          </span>
        </div>
        {message.type == "text" ? (
          <div>{message.message}</div>
        ) : (
          <div className="flex cursor-pointer group w-fit gap-2 hover:bg-slate-300 bg-slate-200 rounded-lg px-3 py-2 items-center">
            <div className="flex items-center text-xs text-white uppercase justify-center bg-slate-500 rounded-xl h-10 w-10">
              {getExtensionFromFileName(message.caption)}
            </div>
            <span className="group-hover:underline">{message.caption}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Message);
