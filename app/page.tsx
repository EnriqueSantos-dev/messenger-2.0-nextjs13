import { Session, unstable_getServerSession } from "next-auth";
import { Message } from "../@types";
import { ChatInput } from "./components/ChatInput";
import { MessageList } from "./components/MessageList";

async function getData(): Promise<{
  messages: Message[];
  session: Session | null;
}> {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/messages`
  );
  const messages: Message[] = await data.json().then((res) => res.messages);

  const session = await unstable_getServerSession();
  return { messages, session };
}

export default async function Home() {
  const { messages, session } = await getData();

  return (
    <main className="w-full">
      {/* Message list */}
      <MessageList initialData={messages} />
      {/* Chat input */}
      <ChatInput user={session} />
    </main>
  );
}
