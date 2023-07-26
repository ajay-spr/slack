import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";
import { flushSync } from "react-dom";

type SendMessageProps = {
  onSend: (text: string, userId: string) => void;
};

const SendMessage: React.FC<SendMessageProps> = ({ onSend }) => {
  const [text, setText] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const handleKeyPress: KeyboardEventHandler = (e) => {
    if (e.key == "Enter") {
      onSend(text, "243");
      flushSync(() => {
        setText("");
      });
      window.scrollTo(0, document.body.scrollHeight);
    }
  };

  return (
    <div className="sticky bottom-0 p-4 bg-white">
      <input
        onChange={handleChange}
        value={text}
        onKeyDown={handleKeyPress}
        className="w-full rounded border border-slate-500 py-2 px-3"
        placeholder="Enter message here"
      ></input>
    </div>
  );
};

export default SendMessage;
