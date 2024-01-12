import UserRepository from "src/repositories/UserRepository";
import AppError from "src/utils/AppError";

class DeleteUserService extends UserRepository {
  public async execute(id: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new AppError("Usuário não encontrado.");
    }
    await this.userRepository.remove(user);
  }
}

export default DeleteUserService;
