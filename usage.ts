import { hmac } from "https://denopkg.com/chiefbiiko/hmac/mod.ts";

console.log("HMAC-SHA256 example", hmac("sha256", "fraud", "money"));
