import Redis from "ioredis";
import configPresets from './config/config.json';

const config =
    process.env.NODE_ENV === 'test' ? configPresets.test : configPresets.development;

export const redis = new Redis({
  port: 6379,
  host: config.redis_host,
});