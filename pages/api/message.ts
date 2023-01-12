import type { NextApiRequest, NextApiResponse } from "next";
import { serverPusher } from "../../lib/pusher";
import redis from "../../lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  const messageChangedTimestamp = {
    ...message,
    created_at: Date.now(),
  };

  await redis.hset(
    "messages",
    messageChangedTimestamp.id,
    JSON.stringify(messageChangedTimestamp)
  );

  await serverPusher.trigger(
    "messages",
    "new-message",
    messageChangedTimestamp
  );

  res.status(201).json({ message: messageChangedTimestamp });
}
