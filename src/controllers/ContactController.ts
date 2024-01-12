import { IController } from "./interface/ControllerInterface";
import { Request, Response } from "express";
import ListContactService from "src/services/contact/ListContactService";
import ShowContactService from "src/services/contact/ShowContactService";
import CreateContactService from "src/services/contact/CreateContactService";
import {
  ICreateContact,
  IUpdateContact,
} from "src/models/interfaces/ContactInterface";
import UpdateContactService from "src/services/contact/UpdateContactService";
import DeleteContactService from "src/services/contact/DeleteContactService";

class ContactController implements IController {
  async index(request: Request, response: Response): Promise<Response> {
    const listService = new ListContactService();
    const addresses = await listService.execute();
    return response.json(addresses);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showService = new ShowContactService();
    const address = await showService.execute(parseInt(id));
    return response.json(address);
  }

  async store(request: Request, response: Response): Promise<Response> {
    const data: ICreateContact = request.body;
    const createService = new CreateContactService();
    const address = await createService.execute(data);

    return response.json(address);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data: IUpdateContact = request.body;
    const updateService = new UpdateContactService();

    const address = await updateService.execute(parseInt(id), data);

    return response.json(address);
  }

  async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteService = new DeleteContactService();
    await deleteService.execute(parseInt(id));
    return response.json({});
  }
}

export default ContactController;
