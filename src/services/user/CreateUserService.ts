import { hash } from "bcrypt";
import { cpf } from "cpf-cnpj-validator";
import User from "src/models/entities/User";
import { IUserCreate } from "src/models/interfaces/UserInterface";
import UserRepository from "src/repositories/UserRepository";
import AppError from "src/utils/AppError";

class CreateUserService extends UserRepository {
  public async execute(userData: IUserCreate): Promise<User> {
    if (!cpf.isValid(userData.cpf)) {
      throw new AppError("o CPF não é válido.");
    }

    if (await this.findByCpf(userData.cpf)) {
      throw new AppError("o CPF já está cadastrado.");
    }

    const passwordHash = await hash(userData.passwordHash, 8);

    const user = this.userRepository.create({ ...userData, passwordHash });
    await this.userRepository.save(user);
    return user;
  }
}

export default CreateUserService;
