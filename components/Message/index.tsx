import { TMessage } from "@/types";

type MessageProps = {
  message: TMessage;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div>
      message: {JSON.stringify(message)} date: {message.timestamp.getDate()}
    </div>
  );
};

export default Message;
