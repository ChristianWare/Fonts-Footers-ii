import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://usw1-crisp-caiman-34850.upstash.io",
  token: process.env.REDIS_KEY!,
});
