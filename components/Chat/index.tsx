import useMessages from "@/hooks/useMessages";
import Loading from "../Loading";
import useChatDetails from "@/hooks/userChatDetails";
import ChatHeader from "./ChatHeader";
import MessageList from "../MessageList";
import SendMessage from "../SendMessage";
import { MessagesActionType } from "@/types";

type ChatProps = {
  id: string;
};

const Chat = ({ id }: ChatProps) => {
  const { details, dispatch: _chatDetailsdispatch } = useChatDetails(id);
  const { isLoading, messages, dispatch: messagesDispatch } = useMessages(id);

  const onLoadMore = (before: Date) => {
    messagesDispatch({
      type: MessagesActionType.LOAD_MORE,
      payload: { before },
    });
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      <ChatHeader details={details} />
      {isLoading ? (
        <Loading />
      ) : (
        <MessageList messages={messages} onLoadMore={onLoadMore} />
      )}
      <SendMessage onSend={(_message: string) => {}} />
    </div>
  );
};

export default Chat;
