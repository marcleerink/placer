import config from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";


config.config();

const sql = postgres(process.env.DATABASE_URL, {max: 1})
const db = drizzle(sql);

await migrate(db, { migrationsFolder: "./migrations" });
