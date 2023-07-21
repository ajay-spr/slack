import Chat from "../Chat";
import EmptyState from "../EmptyState";

type MainProps = {
  activeChatId: null | string;
};

const Main: React.FC<MainProps> = ({ activeChatId }) => {
  return activeChatId === null ? (
    <EmptyState
      title="Nothing to see here"
      subText="Please select a chat from the sidebar to view"
    />
  ) : (
    <Chat id="123" />
  );
};

export default Main;
