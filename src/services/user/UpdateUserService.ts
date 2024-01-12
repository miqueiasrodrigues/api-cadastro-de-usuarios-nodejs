import { hash } from "bcrypt";
import { cpf } from "cpf-cnpj-validator";
import User from "src/models/entities/User";
import { IUserUpdate } from "src/models/interfaces/UserInterface";
import UserRepository from "src/repositories/UserRepository";
import AppError from "src/utils/AppError";
import uploadConfig from "@config/upload";
import path from "path";
import fs from "fs";

class UpdateUserService extends UserRepository {
  public async execute(id: number, updateUserData: IUserUpdate): Promise<User> {
    let user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new AppError("Usuário não encontrado.");
    }

    if (updateUserData.cpf) {
      if (cpf.isValid(updateUserData.cpf)) {
        throw new AppError("o CPF não é válido.");
      }

      const existingUserWithCpf = await this.findByCpf(updateUserData.cpf);

      if (existingUserWithCpf && existingUserWithCpf.cpf !== user.cpf) {
        throw new AppError("O CPF já está cadastrado.");
      }
    }

    if (updateUserData.imageUrl && user.imageUrl !== "") {
      const userAvatarFilePath = path.join(
        uploadConfig.directory,
        user.imageUrl
      );

      const userAvatarFileExists = await fs.promises
        .stat(userAvatarFilePath)
        .catch(() => false);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
      user.imageUrl = updateUserData.imageUrl;
    }

    user = {
      ...user,
      ...updateUserData,
    };

    if (updateUserData.passwordHash) {
      const passwordHash = await hash(updateUserData.passwordHash, 8);
      user = {
        ...user,
        passwordHash,
      };
    }

    await this.userRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
