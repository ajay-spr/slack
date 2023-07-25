import { TMessage } from "@/types";

type MessageProps = {
  message: TMessage;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className="w-full bg-slate-100 rounded px-3 py-2">
      message: {JSON.stringify(message)} date: {message.timestamp.getDate()}
    </div>
  );
};

export default Message;
