import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { Message } from "../../@types";

type MessageProps = {
  message: Message;
};

export function Message({ message }: MessageProps) {
  const { data: session } = useSession();
  const isUser = session?.user?.email === message.email;

  return (
    <div className={`flex w-fit ${isUser && "ml-auto flex-row-reverse"}`}>
      <div className={`flex-shrink-0 `}>
        <Image
          src={message.profile_pic}
          alt="profile avatar user"
          width={50}
          height={10}
          quality={95}
          className="rounded-full mx-2"
        />
      </div>
      <div className={`flex flex-col ${isUser && "items-end"}`}>
        <p
          className={`text-[0.65rem] px-[2px] pb-[2px] ${
            isUser ? "text-blue-400" : "text-red-400"
          }`}
        >
          {message.username}
        </p>
        <div
          className={`px-3 py-2 rounded-lg w-fit text-white  ${
            isUser ? "bg-blue-400" : "bg-red-400"
          }`}
        >
          <p>{message.message}</p>
        </div>
      </div>
      <p
        className={`text-[0.65rem] italic px-2 text-gray-300 whitespace-nowrap self-end`}
      >
        {new Intl.RelativeTimeFormat("en", { style: "long" }).format(
          -new Date(message.created_at).getDay(),
          "minutes"
        )}
      </p>
    </div>
  );
}
