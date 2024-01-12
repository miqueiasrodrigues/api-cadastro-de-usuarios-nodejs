import { DataSource } from "typeorm";
import { CreateUsers1704551570835 } from "./migrations/1704551570835-CreateUsers";
import { CreateAddresses1704825459741 } from "./migrations/1704825459741-CreateAddresses";
import { CreateContacts1704911446901 } from "./migrations/1704911446901-CreateContacts";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: parseInt(process.env.DB_PORT || "3306"),
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "projeto",
  synchronize: true,
  logging: false,
  entities: ["src/models/entities/*.ts"],
  subscribers: [],
  migrations: [
    CreateUsers1704551570835,
    CreateContacts1704911446901,
    CreateAddresses1704825459741,
  ],
});
