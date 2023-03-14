import Chat from "../components/Chat";
import ChatInput from "../components/ChatInput";

function ChatPage() {
  const id = "1";
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <

      {/* Chat */}
      <Chat chatId={id} />
      {/* ChatInput */}
      <ChatInput chatId={id} />
    </div>
  );
}

export default ChatPage;
