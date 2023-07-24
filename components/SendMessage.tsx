type SendMessageProps = {
  onSend: (payload: string) => void;
};

const SendMessage: React.FC<SendMessageProps> = ({ onSend }) => {
  return (
    <div className="sticky bottom-0 p-4">
      <input
        className="w-full rounded border border-slate-500 py-2 px-3"
        placeholder="Enter message here"
      ></input>
    </div>
  );
};

export default SendMessage;
