import { Router, Request, Response } from "express";
import userRouter from "./userRoutes";
import sessionRouter from "./sessionRoutes";
import addressRouter from "./addressRouter";
import contactRouter from "./contactRouter";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Hello World" });
});

routes.use("/user", userRouter);
routes.use("/address", addressRouter);
routes.use("/contact", contactRouter);

routes.use("/session", sessionRouter);

export default routes;
