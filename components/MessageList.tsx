import { TMessage } from "@/types";
import Message from "./Message";
import Separator from "./Separator";
import useScrollToBottom from "@/hooks/useScrollToBottom";

type MessageListProps = {
  messages: TMessage[];
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const sortedMessages = messages.sort((a, b) =>
    a.timestamp < b.timestamp ? 1 : -1
  );
  let prev = sortedMessages[0].timestamp;
  const bottomRef = useScrollToBottom();

  return (
    <div className="flex-1 flex flex-col-reverse gap-1 px-2">
      <div key="scrollToBottomRef" ref={bottomRef}></div>
      {sortedMessages.map((message) => {
        const currentDate = message.timestamp.getDate();
        const prevDate = prev.getDate();

        console.log(currentDate, prevDate, prev === message.timestamp);

        if (currentDate != prevDate) {
          const dateString = prev.toLocaleDateString();
          prev = message.timestamp;
          return (
            <>
              <Separator date={dateString} />
              <Message key={message.id} message={message} />
            </>
          );
        }

        return (
          <>
            <Message key={message.id} message={message} />
          </>
        );
      })}
    </div>
  );
};

export default MessageList;
