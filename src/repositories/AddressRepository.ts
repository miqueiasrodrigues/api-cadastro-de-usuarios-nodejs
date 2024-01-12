import { AppDataSource } from "src/database/data-source";
import { Address } from "src/models/entities/Address";
import { Repository } from "typeorm";
import UserRepository from "./UserRepository";
import User from "src/models/entities/User";

class AddressRepository extends UserRepository {
  protected addressRepository: Repository<Address>;

  constructor() {
    super();
    this.addressRepository = AppDataSource.getRepository(Address);
  }

  protected async findByUser(user: User): Promise<Address | null> {
    const address = await this.addressRepository.findOne({ where: { user } });
    return address;
  }
}

export default AddressRepository;
