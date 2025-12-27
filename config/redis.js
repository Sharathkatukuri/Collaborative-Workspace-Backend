const { createClient } = require("redis");

const redis = createClient({
  url: process.env.REDIS_URL
});

redis.on("connect", () => console.log("Redis connected"));
redis.on("error", (err) => console.error("Redis error", err));

(async () => {
   await redis.connect();
})();

module.exports = redis;


// const { createClient } = require("redis");

// const redis = createClient({
//   url: process.env.REDIS_URL,
//   socket: {
//     tls: true,
//     reconnectStrategy: (retries) => {
//       if (retries > 5) return new Error("Redis retry limit reached");
//       return Math.min(retries * 200, 1000);
//     }
//   }
// });

// redis.on("connect", () => console.log("Redis connected"));
// redis.on("error", (err) => console.error("Redis error", err));

// (async () => {
//    await redis.connect();
// })();

// module.exports = redis;

