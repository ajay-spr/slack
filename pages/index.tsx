import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import useChats from "@/hooks/useChats";

const activeChat = "4";

export default function Home() {
  const { activeChatId, allChats, onAction } = useChats("2939");
  return (
    <Dashboard>
      <Sidebar chats={allChats} activeChatId={activeChat} onAction={onAction} />
      <Main activeChatId={activeChat} />
    </Dashboard>
  );
}
