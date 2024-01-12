import { Segments, celebrate } from "celebrate";
import { Router } from "express";
import SessionController from "src/controllers/SessionController";
import SESSION_SCHEMA from "./components/sessionSchema";

const sessionRouter = Router();
const sessionController = new SessionController();

sessionRouter.post(
  "/",
  celebrate({ [Segments.BODY]: SESSION_SCHEMA }),
  sessionController.store
);

export default sessionRouter;