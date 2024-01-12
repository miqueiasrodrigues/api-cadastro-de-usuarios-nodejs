import { Segments, celebrate } from "celebrate";
import { Router } from "express";
import ID_SCHEMA from "./components/idSchema";
import isAuthenticated from "src/middlewares/isAuthenticated";
import AddressController from "src/controllers/AddressController";
import ADDRESS_REQUIRED_SCHEMA from "./components/address/addressRequiredSchema";
import ADDRESS_NO_REQUIRED_SCHEMA from "./components/address/addressNoRequiredSchema";

const addressRouter = Router();
const addressController = new AddressController();

addressRouter.get("/", isAuthenticated, addressController.index);

addressRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: ID_SCHEMA,
  }),
  addressController.show
);

addressRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: ADDRESS_REQUIRED_SCHEMA,
  }),
  addressController.store
);

addressRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: ID_SCHEMA,
    [Segments.BODY]: ADDRESS_REQUIRED_SCHEMA,
  }),
  addressController.update
);

addressRouter.patch(
  "/:id",
  celebrate({
    [Segments.PARAMS]: ID_SCHEMA,
    [Segments.BODY]: ADDRESS_NO_REQUIRED_SCHEMA,
  }),
  addressController.update
);

addressRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: ID_SCHEMA,
  }),
  addressController.destroy
);

export default addressRouter;
