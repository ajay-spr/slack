import { TMessage } from "@/types";
import Message from "./Message";
import Separator from "./Separator";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { Fragment } from "react";
import LoadMoreButton from "./LoadMoreButton";

type MessageListProps = {
  messages: TMessage[];
  onLoadMore: (before: Date) => void;
};

const MessageList: React.FC<MessageListProps> = ({ messages, onLoadMore }) => {
  const sortedMessages = messages.sort((a, b) =>
    a.timestamp < b.timestamp ? 1 : -1
  );
  let prev = sortedMessages[0].timestamp;

  const onLoadMoreBeforeLastMessage = () => {
    onLoadMore(sortedMessages[sortedMessages.length - 1].timestamp);
  };
  const { containerRef } = useInfiniteScroll(
    sortedMessages,
    onLoadMoreBeforeLastMessage
  );

  return (
    <div ref={containerRef} className="flex-1 flex flex-col-reverse gap-1 px-2">
      {sortedMessages.map((message) => {
        const currentDate = message.timestamp.getDate();
        const prevDate = prev.getDate();

        if (currentDate != prevDate) {
          const dateString = prev.toLocaleDateString();
          prev = message.timestamp;
          return (
            <Fragment key={message.id}>
              <Separator date={dateString} />
              <Message message={message} />
            </Fragment>
          );
        }

        return <Message key={message.id} message={message} />;
      })}
      <LoadMoreButton onClick={onLoadMoreBeforeLastMessage} />
    </div>
  );
};

export default MessageList;
