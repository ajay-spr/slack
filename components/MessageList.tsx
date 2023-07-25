import { TMessage } from "@/types";
import Message from "./Message";

type MessageListProps = {
  messages: TMessage[];
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex-1 flex flex-col-reverse gap-2 px-2">
      {messages.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
    </div>
  );
};

export default MessageList;
