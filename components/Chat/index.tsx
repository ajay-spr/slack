import useMessages from "@/hooks/useMessages";
import Loading from "../Loading";
import useChatDetails from "@/hooks/userChatDetails";
import ChatHeader from "./ChatHeader";
import MessageList from "../MessageList";
import SendMessage from "../SendMessage";

type ChatProps = {
  id: string;
};

const Chat = ({ id }: ChatProps) => {
  const { details, dispatch: _chatDetailsdispatch } = useChatDetails(id);
  const { isLoading, messages, dispatch: messagesDispatch } = useMessages(id);
  return (
    <div className="relative w-full h-full flex flex-col">
      <ChatHeader details={details} />
      {isLoading ? <Loading /> : <MessageList messages={messages} />}
      <SendMessage onSend={(_message: string) => {}} />
    </div>
  );
};

export default Chat;
