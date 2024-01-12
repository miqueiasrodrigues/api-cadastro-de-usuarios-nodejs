import CreateAddressService from "src/services/address/CreateAddressService";
import { IController } from "./interface/ControllerInterface";
import { Request, Response } from "express";
import ListAddressService from "src/services/address/ListAddressService";
import ShowAddressService from "src/services/address/ShowAddressService";
import {
  ICreateAddress,
  IUpdateAddress,
} from "src/models/interfaces/AddressInterface";
import UpdateAddressService from "src/services/address/UpdateAddressService";
import DeleteAddressService from "src/services/address/DeleteAddressService";

class AddressController implements IController {
  async index(request: Request, response: Response): Promise<Response> {
    const listService = new ListAddressService();
    const addresses = await listService.execute();
    return response.json(addresses);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showService = new ShowAddressService();
    const address = await showService.execute(parseInt(id));
    return response.json(address);
  }

  async store(request: Request, response: Response): Promise<Response> {
    const data: ICreateAddress = request.body;
    const createService = new CreateAddressService();
    const address = await createService.execute(data);

    return response.json(address);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data: IUpdateAddress = request.body;
    const updateService = new UpdateAddressService();

    const address = await updateService.execute(parseInt(id), data);

    return response.json(address);
  }

  async destroy(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    const deleteService = new DeleteAddressService();
    await deleteService.execute(parseInt(id));
    return response.json({});
  }
}

export default AddressController;
