import User from "src/models/entities/User";
import UserRepository from "src/repositories/UserRepository";
import AppError from "src/utils/AppError";

class ShowUserService extends UserRepository {
  public async execute(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new AppError("Usuário não encontrado.");
    }
    return user;
  }
}

export default ShowUserService;
