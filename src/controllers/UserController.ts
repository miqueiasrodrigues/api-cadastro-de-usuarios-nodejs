import ListUserService from "src/services/user/ListUserService";
import { IController } from "./interface/ControllerInterface";
import { Request, Response } from "express";
import ShowUserService from "src/services/user/ShowUserService";
import CreateUserService from "src/services/user/CreateUserService";
import { IUserCreate, IUserUpdate } from "src/models/interfaces/UserInterface";
import UpdateUserService from "src/services/user/UpdateUserService";
import DeleteUserService from "src/services/user/DeleteUserService";

class UserController implements IController {
  async index(request: Request, response: Response): Promise<Response> {
    const listService = new ListUserService();
    const users = await listService.execute();
    return response.json(users);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showService = new ShowUserService();
    const user = await showService.execute(parseInt(id));

    return response.json(user);
  }

  async store(request: Request, response: Response): Promise<Response> {
    let data: IUserCreate = request.body;
    const imageUrl = request.file?.filename;
    if (imageUrl) {
      data = { ...data, imageUrl };
    }

    const createService = new CreateUserService();
    const user = await createService.execute(data);

    return response.json(user);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    let updateData: IUserUpdate = request.body;
    const imageUrl = request.file?.filename;
    if (imageUrl) {
      updateData = { ...updateData, imageUrl };
    }

    const updateService = new UpdateUserService();
    const user = await updateService.execute(parseInt(id), updateData);

    return response.json(user);
  }

  async destroy(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteService = new DeleteUserService();
    await deleteService.execute(parseInt(id));

    return response.json({});
  }
}

export default UserController;
