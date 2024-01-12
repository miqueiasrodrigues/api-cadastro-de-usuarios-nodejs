import { Segments, celebrate } from "celebrate";
import { Router } from "express";
import UserController from "src/controllers/UserController";
import USER_REQUIRED_SCHEMA from "./components/user/userRequiredSchema";
import ID_SCHEMA from "./components/idSchema";
import USER_NO_REQUIRED_SCHEMA from "./components/user/userNoRequiredSchema";
import isAuthenticated from "src/middlewares/isAuthenticated";
import multer from "multer";
import uploadConfig from "@config/upload";
import isValidationError from "src/middlewares/isValidationError";

const userRouter = Router();
const userController = new UserController();
const upload = multer(uploadConfig);
userRouter.get("/", /*isAuthenticated,*/ userController.index);

userRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: ID_SCHEMA,
  }),
  userController.show
);

userRouter.post(
  "/",
  upload.single("imageUrl"),
  celebrate({
    [Segments.BODY]: USER_REQUIRED_SCHEMA,
  }),
  isValidationError,
  userController.store
);

userRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: ID_SCHEMA,
    [Segments.BODY]: USER_REQUIRED_SCHEMA,
  }),
  upload.single("imageUrl"),
  isValidationError,
  userController.update
);

userRouter.patch(
  "/:id",
  celebrate({
    [Segments.PARAMS]: ID_SCHEMA,
    [Segments.BODY]: USER_NO_REQUIRED_SCHEMA,
  }),
  upload.single("imageUrl"),
  isValidationError,
  userController.update
);

userRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: ID_SCHEMA,
  }),
  userController.destroy
);

export default userRouter;
