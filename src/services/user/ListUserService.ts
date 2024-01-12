import User from "src/models/entities/User";
import UserRepository from "src/repositories/UserRepository";

class ListUserService extends UserRepository{
  public async execute(): Promise<User[]>{
    const users = await this.userRepository.find();
    return users;
  }
}

export default ListUserService;
