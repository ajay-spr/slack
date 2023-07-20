import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import { ChatMeta } from "@/types";
import Main from "@/components/Main";
import { Inter } from "next/font/google";

const allChats: ChatMeta[] = [
  {
    id: "1",
    title: "general",
    isChannel: true,
    users: ["Erling Haaland", "Leo Messi", "Kylian Mbappe"],
  },
  {
    id: "2",
    isChannel: false,
    title: "Peaky Blinders",
    users: ["Ajay Yadav", "Oliver Queen", "Thomas Shelby"],
  },
  {
    id: "3",
    isChannel: true,
    title: "discussions",
    users: ["Erling Haaland", "Leo Messi", "Ajay Yadav", "Oliver Queen"],
  },
  {
    id: "4",
    isChannel: false,
    users: ["Leo Messi"],
  },
];

const activeChat = null;

export default function Home() {
  return (
    <Dashboard>
      <Sidebar chats={allChats} activeChatId={activeChat} />
      <Main activeChatId={activeChat} />
    </Dashboard>
  );
}
