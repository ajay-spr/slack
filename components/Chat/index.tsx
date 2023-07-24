import useMessages from "@/hooks/useMessages";
import Loading from "../Loading";
import useChatDetails from "@/hooks/userChatDetails";
import ChatHeader from "./ChatHeader";

type ChatProps = {
  id: string;
};

const Chat = ({ id }: ChatProps) => {
  const { details } = useChatDetails(id);
  const { isLoading, messages, onAction } = useMessages(id);

  return (
    <div className="relative w-full h-full">
      <ChatHeader details={details} />
      {
        isLoading ? <Loading /> : null // MessageList here
      }
    </div>
  );
};

export default Chat;
