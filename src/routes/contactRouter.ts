import { Segments, celebrate } from "celebrate";
import { Router } from "express";
import ID_SCHEMA from "./components/idSchema";
import isAuthenticated from "src/middlewares/isAuthenticated";
import ContactController from "src/controllers/ContactController";
import CONTACT_REQUIRED_SCHEMA from "./components/contact/contactRequiredSchema";
import CONTACT_NO_REQUIRED_SCHEMA from "./components/contact/contactNoRequiredSchema";

const contactRouter = Router();
const contactController = new ContactController();

contactRouter.get("/", contactController.index);

contactRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: ID_SCHEMA,
  }),
  contactController.show
);

contactRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: CONTACT_REQUIRED_SCHEMA,
  }),
  contactController.store
);

contactRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: ID_SCHEMA,
    [Segments.BODY]: CONTACT_REQUIRED_SCHEMA,
  }),
  contactController.update
);

contactRouter.patch(
  "/:id",
  celebrate({
    [Segments.PARAMS]: ID_SCHEMA,
    [Segments.BODY]: CONTACT_NO_REQUIRED_SCHEMA,
  }),
  contactController.update
);

contactRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: ID_SCHEMA,
  }),
  contactController.destroy
);

export default contactRouter;
