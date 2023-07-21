import useMessages from "@/hooks/useMessages";
import Loading from "../Loading";

type ChatProps = {
  id: string;
};

const Chat = ({ id }: ChatProps) => {
  const { isLoading, messages, onAction } = useMessages("12");

  return isLoading ? (
    <Loading />
  ) : (
    <div className="relative w-full h-full">Chat</div>
  );
};

export default Chat;
