import app from "./app";
import { AppDataSource } from "./database/data-source";
import "reflect-metadata";

import dotenv from "dotenv";

dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log("TypeORM connected to the database");

    app.listen(process.env.PORT || 3333, () => {
      console.log(`Server started on port ${process.env.PORT || 3333}`);
    });
  })
  .catch((error) => {
    console.error("Error initializing TypeORM:", error.message);
  });
