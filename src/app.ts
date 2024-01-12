import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import { errors } from "celebrate";
import routes from "./routes";
import isError from "./middlewares/isError";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());
app.use(isError);

export default app;
