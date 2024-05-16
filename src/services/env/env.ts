import { z } from "zod";
import "dotenv";

const envSchema = z.object({
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.log("Unavailable Environment Variables");
}

export const env = _env;
