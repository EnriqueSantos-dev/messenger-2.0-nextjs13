"use client";

import { useEffect } from "react";
import { useQuery } from "react-query";
import { Message as MessageType } from "../../@types";
import { clientPusher } from "../../lib/pusher";
import { queryClient } from "../../lib/react-query";
import ChatService from "../../services/messages";
import { Message } from "./Message";

interface MessageListProps {
  initialData: MessageType[];
}

export function MessageList({ initialData }: MessageListProps) {
  const { data: messages, isLoading } = useQuery({
    queryKey: ["/api/messages"],
    queryFn: ChatService.getMessages,
    keepPreviousData: true,
    staleTime: 1000,
    initialData,
  });

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");

    channel.bind("new-message", async (data: MessageType) => {
      if (messages?.find((message) => message.id === data.id)) return;

      queryClient.invalidateQueries("/api/messages");
    });

    return () => {
      channel.unsubscribe();
    };
  }, [messages, clientPusher]);

  if (isLoading) {
    return <p>Loading messages...</p>;
  }

  return (
    <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
      {messages?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
