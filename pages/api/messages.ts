import type { NextApiRequest, NextApiResponse } from "next";
import { Message } from "../../@types";
import redis from "../../lib/redis";

interface Response {
  messages: Message[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
  }

  const resQuery = await redis.hvals("messages");

  const messages: Message[] = resQuery
    .map((message) => JSON.parse(message))
    .sort((a: Message, b: Message) => a.created_at - b.created_at);

  res.status(200).json({ messages });
}
