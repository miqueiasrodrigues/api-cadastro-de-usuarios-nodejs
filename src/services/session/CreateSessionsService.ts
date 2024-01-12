import { compare } from "bcrypt";
import { cpf } from "cpf-cnpj-validator";
import { sign } from "jsonwebtoken";
import authConfig from "@config/auth";
import {
  ISessionRequest,
  ISessionResponse,
} from "src/interfaces/SessionInterface";
import UserRepository from "src/repositories/UserRepository";
import AppError from "src/utils/AppError";

class CreateSessionsService extends UserRepository {
  public async execute(userData: ISessionRequest): Promise<ISessionResponse> {
    if (!cpf.isValid(userData.cpf)) {
      throw new AppError("CPF inválido. Verifique o CPF fornecido.", 400);
    }

    const user = await this.findByCpf(userData.cpf);

    if (!user) {
      throw new AppError(
        "Usuário não cadastrado. Verifique suas credenciais.",
        404
      );
    }

    const passwordConfirmed = await compare(
      userData.passwordHash,
      user.passwordHash
    );

    if (!passwordConfirmed) {
      throw new AppError("Senha incorreta. Verifique suas credenciais.", 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id.toString(),
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}

export default CreateSessionsService;
