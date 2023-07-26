import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const validateAndSend = (text: string, userId: string) => {
    if (text == "") return;
    onSend(text, userId);
    flushSync(() => {
      setText("");
    });
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleSend = () => {
    validateAndSend(text, "243");
  };

  const handleKeyPress: KeyboardEventHandler = (e) => {
    if (e.key == "Enter") {
      validateAndSend(text, "243");
    }
  };

  return (
    <div className="sticky bottom-0 bg-white">
      <div className="flex p-4 gap-2">
        <input
          onChange={handleChange}
          value={text}
          onKeyDown={handleKeyPress}
          className="w-full hover:border-black rounded border border-slate-400 py-2 px-3"
          placeholder="Enter message here"
        ></input>
        <button
          onClick={handleSend}
          className=" bg-slackGreen px-3 py-2 rounded"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
