import { AppDataSource } from "src/database/data-source";
import User from "src/models/entities/User";
import { Repository } from "typeorm";

class UserRepository {
  protected userRepository: Repository<User>;
  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  protected async findByName(
    firstName?: string,
    lastName?: string
  ): Promise<User | null> {
    const users = await this.userRepository.findOne({
      where: {
        firstName,
        lastName,
      },
    });
    return users;
  }
  

  protected async findByCpf(cpf: string): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: {
        cpf,
      },
    });
    return user;
  }
}

export default UserRepository;
