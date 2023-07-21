import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
import useChats from "@/hooks/useChats";

export default function Home() {
  const { activeChatId, allChats, onAction } = useChats("2939");
  return (
    <Dashboard>
      <Sidebar
        chats={allChats}
        activeChatId={activeChatId}
        onAction={onAction}
      />
      <Main activeChatId={activeChatId} />
    </Dashboard>
  );
}
