import Redis from "ioredis";

const pass = process.env.IO_REDIS_PASS as string;

const redis = new Redis(
  `redis://default:${pass}@us1-excited-gazelle-37688.upstash.io:37688`
);

export default redis;
