import CreateSessionsService from "src/services/session/CreateSessionsService";
import { IController } from "./interface/ControllerInterface";
import { Request, Response } from "express";

class SessionController implements IController {
  async index(request: Request, response: Response): Promise<Response> {
    return response.json({});
  }

  async show(request: Request, response: Response): Promise<Response> {
    return response.json({});
  }

  async store(request: Request, response: Response): Promise<Response> {
    const { cpf, passwordHash } = request.body;
    const createSessionsService = new CreateSessionsService();
    const sessionResponse = await createSessionsService.execute({
      cpf,
      passwordHash,
    });

    return response.json(sessionResponse);
  }

  async update(request: Request, response: Response): Promise<Response> {
    return response.json({});
  }

  async destroy(request: Request, response: Response): Promise<Response> {
    return response.json({});
  }
}

export default SessionController;
